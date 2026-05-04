import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "著者：はる子（@haruko_ai_jp）",
  description: "非エンジニア × Claude Code × 4アシスタント。半導体翻訳と自作AIアプリ運用、忘れられた長文の発掘。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">ABOUT</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-8">
        著者：はる子
      </h1>

      <div className="prose prose-lg max-w-none">
        <p>
          <strong>非エンジニアのAI運用家</strong>。Claude Code と4体のAIアシスタント（フィラ／スーラ／ユーラ／アプラ）を毎日動かしながら、3つのレーンで活動しています。
        </p>

        <h2>3レーン</h2>

        <h3>① 半導体翻訳（@haruko_ai_jp）</h3>
        <p>
          中国AI × 韓国半導体 × 台湾半導体 × ロボットの一次資料を毎日日本語化。鮮度のある速報レーン。
        </p>

        <h3>② 忘れられた長文発掘（このノート）</h3>
        <p>
          失効特許・廃止規格・古論文・米軍 declassified 文書・倒産企業の決算、そして<strong>主婦の毎日に密着した過去文書</strong>（食品添加物の許可文書・化粧品成分の発見論文・市販薬のOTC化告示・母子手帳の初版）を、LLMに読ませて現代に翻訳し直す実践記。
        </p>
        <p>
          2026年5月から <strong>Phase 1（生活密着型）</strong> に入り、台所・薬箱・冷蔵庫・化粧台にある「あれ」の起源を5つのサブシリーズで掘り下げています。
        </p>

        <h2>サブシリーズ構成（2026年5月〜）</h2>

        <h3>Phase 1：主婦の毎日に降りてくる5枠</h3>
        <ul>
          <li><strong>Kitchen Health Archaeology</strong> — 食品添加物・調味料・調理器具・食品衛生</li>
          <li><strong>Cosmetic Archaeology</strong> — 化粧品成分・老舗ブランドの創業文書・規制</li>
          <li><strong>Pharma Archaeology</strong> — 市販薬の許可文書・OTC化の経緯・薬箱の歴史</li>
          <li><strong>Maternal Archaeology</strong> — 母子手帳・学校給食・育児書・妊婦健診</li>
          <li><strong>Diet Trend Archaeology</strong> — 流行ダイエットの元論文・栄養基準の改訂史</li>
        </ul>

        <h3>これまでに旗を立てた業界系4枠</h3>
        <ul>
          <li><strong>Patent Archaeology</strong> — 失効特許の発掘</li>
          <li><strong>IR Archaeology</strong> — 韓国・中国・台湾の旧IR資料</li>
          <li><strong>Standard Archaeology</strong> — 廃止された規格書・引用ゼロのarXiv早期論文</li>
          <li><strong>Declassified Archaeology</strong> — 米軍declassified、各国機密解除文書</li>
        </ul>

        <h3>③ 自作AIアプリ事例</h3>
        <p>
          人手作業をLLMで圧縮する実証として、Webアプリを <a href="/apps">8本本番運用</a> 中。day1 / 看板AI / MediBridge / VetBridge / うちのこのきもち / 1000yen-lunch / コツコツFX手帳 / AI Archaeology（このサイト）。
        </p>

        <h2>電子書籍版</h2>
        <p>
          本連載の最初の9本（Introduction / Pitfalls / Templates / Patent Archaeology #1・#2 / IR Archaeology #1 / Standard Archaeology #1 / Declassified Archaeology #1・#2）を、書籍として再構成したPDF版を販売しています。
        </p>
        <p>
          <strong>『忘れられた長文発掘ノート — LLMでやる、はるこのAI考古学（第1版・全7章）』</strong>
        </p>
        <ul>
          <li>形式：PDF（A5判相当、約4万字、約200ページ）</li>
          <li>価格：980円</li>
          <li>販売：<a href="https://haruko-ai.booth.pm/items/8302397" target="_blank" rel="noopener noreferrer">Booth で購入</a></li>
        </ul>
        <p>
          本サイトでは引き続き全文を無料公開しています。書籍版は「オフラインで通読したい」「PDF として保存したい」読者向けの選択肢としてどうぞ。
        </p>

        <h2>このノートの方針</h2>
        <ul>
          <li><strong>4軸固定テンプレ</strong>：毎回 <strong>過去の資料 → 現在どう変わったか → 現代へのヒント → 応用</strong> の4軸で構成。要約だけで終わらせない</li>
          <li><strong>出典必須</strong>：1次取得確認した媒体名以外は書かない</li>
          <li><strong>ポジショントークなし</strong>：自分が儲かる方向への誘導はしない</li>
          <li><strong>失敗例も書く</strong>：捏造・幻覚・コスト爆発の落とし穴を共有する</li>
          <li><strong>プロンプト掲示は廃止</strong>（2026年5月〜）：初期7本のプロンプト全文は<a href="/notes/07-templates">第7回 Templates</a> および<a href="https://haruko-ai.booth.pm/items/8302397" target="_blank" rel="noopener noreferrer">書籍第1版</a>に集約済み。新規エピソードは読者層に合わせてプロンプトセクションを省略</li>
          <li><strong>医療・健康・美容判断は読者責任</strong>：本連載は過去文書のアーカイブ作業です。現代の判断は、最新の情報源と専門家の助言に基づいて読者ご自身の責任で行ってください</li>
        </ul>

        <h2>連絡先</h2>
        <p>
          X：<a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer">@haruko_ai_jp</a>
        </p>
      </div>
    </div>
  );
}
