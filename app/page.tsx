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

      {/* 編集方針 */}
      <section className="bg-paper border-b border-navy/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10">
          <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">EDITORIAL POLICY</div>
          <h2 className="font-serif text-navy text-xl sm:text-2xl font-bold mb-4">
            4軸でブレずに書く
          </h2>
          <p className="text-navy/80 text-sm sm:text-base leading-relaxed mb-4">
            毎回のエピソードは、<strong>過去の資料 → 現在どう変わったか → 現代へのヒント → 応用</strong>の4軸で構成しています。要約だけで終わらず、今日からの暮らしに着地させることを編集方針の核としています。
          </p>
          <p className="text-navy/60 text-sm leading-relaxed">
            本連載は過去文書のアーカイブ作業です。医療・健康・栄養・美容に関する現代の判断は、最新の情報源と専門家の助言に基づいて読者ご自身の責任で行ってください。
          </p>
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
                  {n.series && n.series !== "Introduction"
                    ? `${n.series.toUpperCase()}${n.seriesNumber ? " #" + n.seriesNumber : ""}`
                    : `EPISODE ${String(n.episode).padStart(2, "0")}`}
                  {" ・ "}{n.publishedAt}
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

      {/* サブシリーズ一覧 — Phase 1 生活密着型 */}
      <section className="bg-navy text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="text-gold-500 text-xs tracking-[0.3em] mb-3">PHASE 1 — DAILY-LIFE SUB-SERIES</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            主婦の毎日に降りてくる5つの考古学
          </h2>
          <p className="text-paper/80 text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            2026年5月から、台所・薬箱・冷蔵庫・化粧台の中の「あれ」に紐づいた過去文書を発掘するフェーズに入りました。
            業界の人しか読まない長文から、家族の毎日に密着した長文へ。
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "Kitchen Health Archaeology", desc: "食品添加物・調味料・調理器具・食品衛生の過去文書。", latest: "#1 — 池田菊苗 1908年 日本特許14805 と『うま味』94年の答え合わせ" },
              { name: "Cosmetic Archaeology", desc: "化粧品の成分・老舗ブランドの創業文書・規制の歴史。", latest: "#1 — 資生堂 1897年「オイデルミン」（近日公開）" },
              { name: "Pharma Archaeology", desc: "市販薬の許可文書・OTC化の経緯・薬箱の中身の歴史。", latest: "Coming soon" },
              { name: "Maternal Archaeology", desc: "母子手帳・学校給食・育児書・妊婦健診の規格と告示。", latest: "Coming soon" },
              { name: "Diet Trend Archaeology", desc: "流行ダイエットの元論文・栄養基準の改訂史。", latest: "Coming soon" },
            ].map((s) => (
              <div key={s.name} className="border border-paper/20 rounded-lg p-5 hover:border-gold-500 transition">
                <div className="font-serif text-gold-500 text-lg font-bold mb-2">{s.name}</div>
                <div className="text-paper/80 text-sm leading-relaxed mb-3">{s.desc}</div>
                <div className="text-paper/60 text-xs tracking-wide">LATEST: {s.latest}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* これまでのサブシリーズ — 業界系4枠 */}
      <section className="bg-navy/90 text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="text-gold-500 text-xs tracking-[0.3em] mb-3">SUB-SERIES — ESTABLISHED</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            これまでに旗を立てた4つの考古学
          </h2>
          <p className="text-paper/80 text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            連載第2-9回で確立した、業界系の4サブシリーズ。
            Phase 1 と並行して、月数本ペースで継続して積み上げていきます。
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "Patent Archaeology", desc: "失効した特許を発掘し、忘れられた発明者の知恵を翻訳する。", latest: "#2 — Nikola Tesla 1888年AC モーター特許 US381968" },
              { name: "IR Archaeology", desc: "韓国・中国・台湾の旧IR資料・年次報告書から、半導体産業史の伏線を掘る。", latest: "#1 — Samsung 1996年世界初1Gb DRAM" },
              { name: "Standard Archaeology", desc: "廃止されたJIS・ISO・IEEEの規格書、引用ゼロのarXiv早期論文。", latest: "#1 — IEEE 802.5 Token Ring の現代復活" },
              { name: "Declassified Archaeology", desc: "米軍declassified、各国の機密解除文書。AI時代に意味を持つ古い計算手法。", latest: "#2 — NSA Project Lightning（1956-62）" },
            ].map((s) => (
              <div key={s.name} className="border border-paper/20 rounded-lg p-5 hover:border-gold-500 transition">
                <div className="font-serif text-gold-500 text-lg font-bold mb-2">{s.name}</div>
                <div className="text-paper/80 text-sm leading-relaxed mb-3">{s.desc}</div>
                <div className="text-paper/60 text-xs tracking-wide">LATEST: {s.latest}</div>
              </div>
            ))}
          </div>
        </div>
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
