#!/bin/bash
# AI考古学 候補DB を Google Drive にフルアップロードするヘルパー
# Day 5 incident（Claude経由70KBアップロード非実用）の解決策
#
# 前提（初回のみ・はるこが手動でやる）：
#   1. brew install rclone（済み）
#   2. rclone config で `gdrive` という名前のGoogle Drive remoteを作成
#      手順は ~/ai-archaeology/db/RCLONE_SETUP.md 参照
#
# 使い方：
#   bash ~/ai-archaeology/db/upload_to_drive.sh
#
# 動作：
#   - candidates.tsv → candidates.csv 変換
#   - 「AI考古学 候補DB YYYY-MM-DD」というタイトルで Drive にアップロード
#   - 既存同名ファイルがあれば置き換える

set -e

DB_DIR="$HOME/ai-archaeology/db"
TODAY=$(date +%Y-%m-%d)
TITLE="AI考古学 候補DB ${TODAY}"
TSV="${DB_DIR}/candidates.tsv"
CSV="${DB_DIR}/candidates.csv"

if [ ! -f "$TSV" ]; then
  echo "ERROR: $TSV not found"
  exit 1
fi

echo "[1/3] TSV→CSV 変換..."
python3 -c "
import csv
with open('${TSV}','r',encoding='utf-8') as fi, open('${CSV}','w',encoding='utf-8',newline='') as fo:
    w = csv.writer(fo)
    for row in csv.reader(fi, delimiter='\t'):
        w.writerow(row)
"
echo "  → ${CSV} ($(wc -c < $CSV | tr -d ' ') bytes)"

echo "[2/3] rclone remote の存在確認..."
if ! rclone listremotes | grep -q '^gdrive:'; then
  echo "ERROR: 'gdrive' remote が rclone に登録されていません。"
  echo "       ~/ai-archaeology/db/RCLONE_SETUP.md の手順で初回設定をしてください。"
  exit 1
fi

echo "[3/3] Drive にアップロード（タイトル: ${TITLE}）..."
# 一時ファイルを希望のタイトルで作成し、Google Sheets形式に変換アップロード
TMP_NAMED="/tmp/${TITLE}.csv"
cp "$CSV" "$TMP_NAMED"

# 既存の同名ファイル（.csv / .xlsx）のみピンポイント削除（差分ファイルや他の似た名前は触らない）
for ext in csv xlsx; do
  TARGET="${TITLE}.${ext}"
  if rclone lsf "gdrive:" --files-only --include "/${TARGET}" 2>/dev/null | grep -q .; then
    echo "  → 既存ファイル削除: ${TARGET}"
    rclone deletefile "gdrive:${TARGET}" 2>/dev/null || true
  fi
done

# CSVのままアップロード（Driveでダブルクリックすると自動でSheetsとして開く）
rclone copy "$TMP_NAMED" "gdrive:" 2>&1 | tail -5
rm -f "$TMP_NAMED"

echo ""
echo "完了。Drive で「${TITLE}」を確認してください。"
echo "ファイルID取得: rclone lsf 'gdrive:' --include '${TITLE}*' --format 'pi'"
