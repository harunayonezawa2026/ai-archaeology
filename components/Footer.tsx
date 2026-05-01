export default function Footer() {
  return (
    <footer className="border-t border-navy/10 mt-24 py-10 bg-navy text-paper/80">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-sm">
        <div className="font-serif text-gold-500 mb-2">忘れられた長文発掘ノート — LLMでやる、はるこのAI考古学</div>
        <div className="text-paper/60">
          人間が読まない長尺ドキュメントをLLMに読ませて、現代に意味を再付与する実践記。
        </div>
        <div className="mt-6 text-paper/40 text-xs">
          © 2026 はる子（@haruko_ai_jp）— 出典必須・ポジショントークなし
        </div>
      </div>
    </footer>
  );
}
