import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
  title: "AI Archaeology — Mining Forgotten Long-Form Documents with LLMs",
  description: "A non-engineer's working notes on using Claude to mine documents nobody reads anymore: expired patents, IR archives, decommissioned standards, declassified reports. Patent / IR / Standard / Declassified Archaeology — four sub-series, one infinite genre.",
};

export default function HomeEN() {
  const notes = getAllNotes("en");

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="text-gold-500 text-xs sm:text-sm tracking-[0.3em] mb-4">
            AI ARCHAEOLOGY — VOL.01
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl leading-tight font-bold mb-6">
            Have Claude read what humans don't.<br />
            Arbitrage the gap.
          </h1>
          <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            Expired US patents (4.2 million). Korean / Chinese / Taiwanese patents in their original languages.
            Decommissioned IEEE standards. US military declassified reports. Bankruptcy filings. Forgotten arXiv papers.
            <br /><br />
            The world is full of long-form documents that humans don't read at scale. Claude can read them in a single night.
            This is the working notebook.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center gap-2 text-gold-500 text-sm tracking-wide">
            <span>by はる子 (@haruko_ai_jp)</span>
            <span>・</span>
            <span>non-engineer × Claude Code × 4 AI assistants</span>
          </div>
        </div>
      </section>

      {/* Editorial Policy */}
      <section className="bg-paper border-b border-navy/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10">
          <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">EDITORIAL POLICY</div>
          <h2 className="font-serif text-navy text-xl sm:text-2xl font-bold mb-4">
            Four-Axis Structure (every episode)
          </h2>
          <p className="text-navy/80 text-sm sm:text-base leading-relaxed mb-4">
            Each episode follows the same four-axis structure: <strong>Past Document → How It Changed → Modern Hint → Practical Application</strong>. Summary alone is not enough; every entry has to land in today's daily life.
          </p>
          <p className="text-navy/60 text-sm leading-relaxed">
            This notebook is an archival exercise. For modern judgments on health, nutrition, and cosmetics, please consult up-to-date sources and qualified professionals.
          </p>
        </div>
      </section>

      {/* Episodes */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="font-serif text-navy text-2xl sm:text-3xl font-bold mb-2">Episodes</h2>
        <div className="text-navy/60 text-sm mb-10">
          The introductory 7-part series, plus continuing sub-series episodes. New entries land here regularly.
        </div>
        <ol className="space-y-6">
          {notes.length === 0 && (
            <li className="text-navy/60">Translation in progress.</li>
          )}
          {notes.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/en/notes/${n.slug}`}
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
        <div className="mt-12 p-5 bg-navy/5 border-l-4 border-gold rounded-r text-sm text-navy/80">
          <strong className="text-navy">Introductory 7-part series complete; sub-series continue with #2, #3, #4...</strong> Each Patent /
          IR / Standard / Declassified Archaeology sub-series stacks indefinitely after #1. Atlas-Obscura
          style — the genre keeps growing.{" "}
          <Link href="/" className="text-gold-600 underline hover:text-gold-700">Read in Japanese →</Link>
        </div>
      </section>

      {/* Phase 1 — Daily-Life Sub-Series */}
      <section className="bg-navy text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="text-gold-500 text-xs tracking-[0.3em] mb-3">PHASE 1 — DAILY-LIFE SUB-SERIES</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Five archaeologies that live in your kitchen
          </h2>
          <p className="text-paper/80 text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            From May 2026, this notebook descends from "documents only industry insiders read" to documents tied to the things in your kitchen, medicine cabinet, fridge, and dressing table.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "Kitchen Health Archaeology", desc: "Food additives, seasonings, kitchenware, food hygiene history.", latest: "#1 — Kikunae Ikeda's 1908 Japanese Patent #14805 and the 94-year umami reckoning (Japanese only)" },
              { name: "Cosmetic Archaeology", desc: "Cosmetic ingredients, founding documents of legacy brands, regulatory history.", latest: "#1 — Shiseido's 1897 Eudermine (forthcoming)" },
              { name: "Pharma Archaeology", desc: "OTC drug approval documents, prescription-to-OTC transitions, the medicine cabinet's long history.", latest: "Coming soon" },
              { name: "Maternal Archaeology", desc: "Maternal-and-child handbooks, school lunch standards, parenting books.", latest: "Coming soon" },
              { name: "Diet Trend Archaeology", desc: "Source papers behind fad diets, revisions to nutritional guidelines.", latest: "Coming soon" },
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

      {/* Established Sub-Series */}
      <section className="bg-navy/90 text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="text-gold-500 text-xs tracking-[0.3em] mb-3">SUB-SERIES — ESTABLISHED</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Four archaeologies already established
          </h2>
          <p className="text-paper/80 text-sm sm:text-base mb-10 max-w-2xl leading-relaxed">
            The four industry-side sub-series established in episodes 2-9, continuing in parallel with Phase 1 at a slower cadence.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "Patent Archaeology", desc: "Mine expired patents. Translate the buried inventor's wisdom into modern context.", upcoming: "#2 — Nikola Tesla's 1888 AC motor patent (US381968)" },
              { name: "IR Archaeology", desc: "Old Korean / Chinese / Taiwanese investor reports. Find the foreshadowing of today's industry.", upcoming: "#1 — Samsung's forgotten 1996 1Gb DRAM" },
              { name: "Standard Archaeology", desc: "Deprecated JIS / ISO / IEEE standards. Zero-citation arXiv papers.", upcoming: "#1 — IEEE 802.5 Token Ring revisited" },
              { name: "Declassified Archaeology", desc: "US military declassified, government reports nobody reads.", upcoming: "#2 — NSA Project Lightning (1956-62)" },
            ].map((s) => (
              <div key={s.name} className="border border-paper/20 rounded-lg p-5 hover:border-gold-500 transition">
                <div className="font-serif text-gold-500 text-lg font-bold mb-2">{s.name}</div>
                <div className="text-paper/80 text-sm leading-relaxed mb-3">{s.desc}</div>
                <div className="text-paper/60 text-xs tracking-wide">LATEST: {s.upcoming}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Lanes */}
      <section className="bg-navy/5 border-y border-navy/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
          <h2 className="font-serif text-navy text-xl sm:text-2xl font-bold mb-6">
            Three lanes this notebook stands on
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-gold-600 text-xs tracking-widest mb-2">LANE 1</div>
              <div className="font-bold text-navy mb-1">Semiconductor Translation</div>
              <div className="text-navy/70">Daily Japanese translation of Chinese AI × Korean/Taiwanese semiconductor × robotics primary sources.</div>
            </div>
            <div>
              <div className="text-gold-600 text-xs tracking-widest mb-2">LANE 2</div>
              <div className="font-bold text-navy mb-1">Forgotten Documents</div>
              <div className="text-navy/70">This blog. Mining zero-freshness long-form documents with Claude.</div>
            </div>
            <div>
              <div className="text-gold-600 text-xs tracking-widest mb-2">LANE 3</div>
              <div className="font-bold text-navy mb-1">Web App Demos</div>
              <div className="text-navy/70">7 production web apps as proof-of-concept for human-to-LLM compression.<Link href="/en/apps" className="text-gold-600 underline ml-1">See 7 apps →</Link></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
