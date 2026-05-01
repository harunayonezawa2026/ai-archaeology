import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default function Home() {
  const notes = getAllNotes();

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="text-gold-500 text-xs sm:text-sm tracking-[0.3em] mb-4">
            AI ARCHAEOLOGY — VOL.01
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl leading-tight font-bold mb-6">
            人間が読まない長文を、<br />
            LLMに読ませる。
          </h1>
          <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            失効した米国特許・忘れられた1980年代の論文・廃止された産業規格・米軍 declassified 文書・倒産した企業の最終決算。世界には「人間が読まないまま埋もれた長尺ドキュメント」が数百万件単位で眠っている。
          </p>
          <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
            それを Claude に読ませて、現代の文脈に翻訳し直す実践記です。
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-gold-500 text-sm tracking-wide">
            <span>by はる子（@haruko_ai_jp）</span>
            <span>・</span>
            <span>非エンジニア × Claude Code × 4アシスタント</span>
          </div>
        </div>
      </section>

      {/* 連載一覧 */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="font-serif text-navy text-2xl sm:text-3xl font-bold mb-2">連載記事</h2>
        <div className="text-navy/60 text-sm mb-10">
          全7回の連載予定。週1ペースで更新。
        </div>
        <ol className="space-y-6">
          {notes.length === 0 && (
            <li className="text-navy/60">準備中です。</li>
          )}
          {notes.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/notes/${n.slug}`}
                className="block border-l-4 border-gold pl-5 sm:pl-6 py-2 hover:bg-navy/5 transition rounded-r"
              >
                <div className="text-gold-600 text-xs tracking-widest mb-1">
                  EPISODE {String(n.episode).padStart(2, "0")} ・ {n.publishedAt}
                </div>
                <div className="font-serif text-navy text-lg sm:text-xl font-bold leading-snug mb-1">
                  {n.title}
                </div>
                {n.subtitle && (
                  <div className="text-navy/70 text-sm">{n.subtitle}</div>
                )}
                <div className="text-navy/60 text-sm mt-2 leading-relaxed">
                  {n.description}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* 3レーン宣言 */}
      <section className="bg-navy/5 border-y border-navy/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
          <h2 className="font-serif text-navy text-xl sm:text-2xl font-bold mb-6">
            このノートが立っている3レーン
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-gold-600 text-xs tracking-widest mb-2">LANE 1</div>
              <div className="font-bold text-navy mb-1">半導体翻訳</div>
              <div className="text-navy/70">中国AI×韓台半導体×ロボットを毎日日本語化。鮮度のある一次資料の速報レーン。</div>
            </div>
            <div>
              <div className="text-gold-600 text-xs tracking-widest mb-2">LANE 2</div>
              <div className="font-bold text-navy mb-1">忘れられた長文発掘</div>
              <div className="text-navy/70">鮮度ゼロの埋もれたドキュメントをLLMで掘り起こす実践レーン。本ノートの主役。</div>
            </div>
            <div>
              <div className="text-gold-600 text-xs tracking-widest mb-2">LANE 3</div>
              <div className="font-bold text-navy mb-1">自作AIアプリ事例</div>
              <div className="text-navy/70">人手作業をLLMで圧縮する実証として作った Webアプリ群。<Link href="/apps" className="text-gold-600 underline">7本の事例集 →</Link></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
