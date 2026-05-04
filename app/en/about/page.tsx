import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — はる子 (@haruko_ai_jp)",
  description: "Non-engineer running 8 production web apps with Claude Code and 4 AI assistants. Multi-language semiconductor news translator. Author of an e-book on AI archaeology.",
};

export default function AboutEN() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">ABOUT</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-8">
        About: はる子 (Haruko)
      </h1>

      <div className="prose prose-lg max-w-none">
        <p>
          <strong>A non-engineer working in Tokyo.</strong> 20+ years of FX trading. Currently running Claude Code with 4 AI assistants daily, on three lanes:
        </p>

        <h2>Three Lanes</h2>

        <h3>1. Semiconductor Translation (@haruko_ai_jp)</h3>
        <p>
          Daily Japanese translation of Chinese AI × Korean/Taiwanese semiconductor × robotics primary sources. Breaking-news lane.
        </p>

        <h3>2. Forgotten Document Mining (this blog)</h3>
        <p>
          Mining expired patents, deprecated standards, old papers, declassified military reports, bankruptcy filings — and now <strong>documents tied to everyday household life</strong> (food-additive approval records, cosmetic-ingredient discovery papers, OTC drug transitions, the first editions of maternal-child handbooks) — with Claude. Re-translating them into modern context.
        </p>
        <p>
          From May 2026, the notebook entered <strong>Phase 1 (daily-life focus)</strong>: five sub-series that descend into the kitchen, medicine cabinet, fridge, and dressing table.
        </p>

        <h2>Sub-Series (from May 2026)</h2>

        <h3>Phase 1: Five daily-life sub-series</h3>
        <ul>
          <li><strong>Kitchen Health Archaeology</strong> — food additives, seasonings, kitchenware, food hygiene</li>
          <li><strong>Cosmetic Archaeology</strong> — cosmetic ingredients, founding documents of legacy brands, regulatory history</li>
          <li><strong>Pharma Archaeology</strong> — OTC approval records, prescription-to-OTC transitions, the medicine cabinet's history</li>
          <li><strong>Maternal Archaeology</strong> — maternal-and-child handbooks, school lunch standards, parenting books</li>
          <li><strong>Diet Trend Archaeology</strong> — source papers behind fad diets, revisions to nutritional guidelines</li>
        </ul>

        <h3>Established industry-side sub-series</h3>
        <ul>
          <li><strong>Patent Archaeology</strong> — expired patents</li>
          <li><strong>IR Archaeology</strong> — old Korean / Chinese / Taiwanese IR archives</li>
          <li><strong>Standard Archaeology</strong> — deprecated standards, zero-citation arXiv papers</li>
          <li><strong>Declassified Archaeology</strong> — US military declassified, government reports nobody reads</li>
        </ul>

        <h3>3. Web App Demos</h3>
        <p>
          Eight production web apps as proof-of-concept of "human-to-LLM compression":
          day1, kanban-AI, MediBridge, VetBridge, uchinoko-kimochi, 1000yen-lunch, kotsukotsu-fx, AI Archaeology (this site).
          See <a href="/en/apps">all 8 apps</a>.
        </p>

        <h2>E-book Edition (Japanese only)</h2>
        <p>
          The first 9 episodes of this series have been re-edited into a PDF book in Japanese.
        </p>
        <p>
          <strong>"Forgotten Long-Document Excavation Notes — Haruko's AI Archaeology with LLM (1st Edition, 7 Chapters)"</strong>
        </p>
        <ul>
          <li>Format: PDF (~40,000 Japanese characters, ~200 pages, A5-equivalent)</li>
          <li>Price: ¥980</li>
          <li>Available on: <a href="https://haruko-ai.booth.pm/items/8302397" target="_blank" rel="noopener noreferrer">Booth (Japan)</a></li>
        </ul>
        <p>
          All episodes remain freely available in full text on this website. The e-book is for readers who want offline access or PDF archival.
        </p>

        <h2>Editorial Principles</h2>
        <ul>
          <li><strong>Four-axis structure</strong> — every episode follows: Past Document → How It Changed → Modern Hint → Practical Application. Summary alone is not enough</li>
          <li><strong>Primary sources only</strong> — no name-dropping unverified publications</li>
          <li><strong>No position-talking</strong> — never push readers toward what benefits me</li>
          <li><strong>Failure modes recorded</strong> — fabrications, misreadings, cost explosions</li>
          <li><strong>Prompt disclosure ended (from May 2026)</strong> — all initial prompts are consolidated in <a href="/en/notes/07-templates">Episode 7 Templates</a> and the <a href="https://haruko-ai.booth.pm/items/8302397" target="_blank" rel="noopener noreferrer">Japanese e-book first edition</a>. New episodes omit per-post prompt sections to better fit the daily-life reader audience</li>
          <li><strong>Modern judgments are reader-owned</strong> — this notebook is an archival exercise. For modern judgments on health, nutrition, and cosmetics, please consult up-to-date sources and qualified professionals</li>
        </ul>

        <h2>Contact</h2>
        <p>
          X: <a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer">@haruko_ai_jp</a>
        </p>
      </div>
    </div>
  );
}
