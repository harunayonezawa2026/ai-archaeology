# rclone × Google Drive 初回セットアップ（はるこ用、所要5分）

Day 5（2026-05-07）にClaude経由でのフルCSVアップロードが非実用と判明したため、
rcloneでフルDBを直接Driveに上げる運用に切り替える。

## なぜこれが必要か

- candidates.csv は 70KB（80件、Day 6以降さらに拡張予定）
- これをClaude経由で textContent / base64Content で渡すと出力token 18-25K消費 → 非現実的
- rclone なら直接ローカルファイルをDriveに上げられる、Claude負荷ゼロ

## はるこの作業（5分・1回だけ）

### 1. ターミナルで rclone config を起動

```
rclone config
```

### 2. 対話プロンプトに以下の通り答える

| 質問 | 答え |
|---|---|
| `e/n/d/r/c/s/q>` | `n`（New remote） |
| `name>` | `gdrive` |
| `Storage>` | `drive`（Google Drive を選ぶ。リストから番号でも可） |
| `client_id>` | （空Enter、デフォルト使用） |
| `client_secret>` | （空Enter、デフォルト使用） |
| `scope>` | `1`（Full access） |
| `service_account_file>` | （空Enter） |
| `Edit advanced config?` | `n`（No） |
| `Use auto config?` | `y`（Yes、ブラウザが自動で開く） |

→ ブラウザが開くので **`cz.jin@metalloyconsulting.com` でログイン → 許可** をクリック

| 質問 | 答え |
|---|---|
| `Configure this as a Shared Drive?` | `n` |
| `Yes this is OK` | `y` |
| `e/n/d/r/c/s/q>` | `q`（Quit） |

### 3. 動作確認

```
rclone lsd gdrive: | head -5
```

→ Driveの直下フォルダがリスト表示されればOK。

### 4. アプラに「rclone 設定完了」と伝える

→ アプラがDay 6から `bash ~/ai-archaeology/db/upload_to_drive.sh` でフル版を毎日上げる運用に切り替える。

## トラブルシューティング

- **ブラウザが開かない**：`Use auto config?` で `n` を選び、表示されるURLを手動でブラウザに貼って認証
- **"client id required" エラー**：Google Cloud Console で OAuth client を自分で作る手順が必要（10分追加）。まず空Enterで試して、それで動かなければアプラに相談
- **既存の `gdrive` remote と衝突**：`rclone config` で `d`（Delete）→ 名前指定 → 再度 `n` で作り直し
