import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 mt-24 py-10 bg-navy text-paper/80">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-sm">
        <div className="font-serif text-gold-500 mb-2">忘れられた長文発掘ノート — LLMでやる、はるこのAI考古学</div>
        <div className="text-paper/60">
          人間が読まない長尺ドキュメントをLLMに読ませて、現代に意味を再付与する実践記。
        </div>

        <div className="mt-6 p-4 border border-gold-500/40 rounded bg-navy/40">
          <div className="text-gold-500 font-bold mb-1">月次プレミアムマガジン</div>
          <div className="text-paper/70 text-xs mb-2">毎日連載の裏側＋月次メタ分析。週1本・月4本を4テーマローテで配信。月額500円・初月無料。</div>
          <a href="https://note.com/haruko_ai" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400 text-xs font-medium underline">noteで購読する →</a>
        </div>

        <NewsletterForm />

        <div className="mt-6 text-paper/40 text-xs">
          © 2026 はる子（<a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">@haruko_ai_jp</a>）— 出典必須・ポジショントークなし
        </div>
      </div>
    </footer>
  );
}
