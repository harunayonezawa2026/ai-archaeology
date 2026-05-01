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
          失効特許・廃止規格・古論文・米軍 declassified 文書・倒産企業の決算など、人間が読まない／読めない長尺ドキュメントをLLMに読ませて現代に翻訳し直す実践記。
        </p>

        <h3>③ 自作AIアプリ事例</h3>
        <p>
          人手作業をLLMで圧縮する実証として、Webアプリを <a href="/apps">7本本番運用</a> 中。day1 / 看板AI / MediBridge / VetBridge / うちのこのきもち / 1000yen-lunch / コツコツFX手帳。
        </p>

        <h2>このノートの方針</h2>
        <ul>
          <li><strong>出典必須</strong>：1次取得確認した媒体名以外は書かない</li>
          <li><strong>ポジショントークなし</strong>：自分が儲かる方向への誘導はしない</li>
          <li><strong>プロンプト全公開</strong>：使った Claude プロンプトとパイプラインを各回末で公開</li>
          <li><strong>失敗例も書く</strong>：捏造・幻覚・コスト爆発の落とし穴を共有する</li>
        </ul>

        <h2>連絡先</h2>
        <p>
          X：<a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer">@haruko_ai_jp</a>
        </p>
      </div>
    </div>
  );
}
