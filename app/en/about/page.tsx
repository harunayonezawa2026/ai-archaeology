import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — はる子 (@haruko_ai_jp)",
  description: "Non-engineer running 7 production web apps with Claude Code and 4 AI assistants. FX trader of 20 years. Multi-language semiconductor news translator.",
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
          Mining expired patents, deprecated standards, old papers, declassified military reports, bankruptcy filings — long-form documents nobody reads at scale — with Claude. Re-translating them into modern context.
        </p>

        <h3>3. Web App Demos</h3>
        <p>
          Seven production web apps as proof-of-concept of "human-to-LLM compression":
          day1, kanban-AI, MediBridge, VetBridge, uchinoko-kimochi, 1000yen-lunch, kotsukotsu-fx.
          See <a href="/en/apps">all 7 apps</a>.
        </p>

        <h2>Editorial Principles</h2>
        <ul>
          <li><strong>Primary sources only</strong> — no name-dropping unverified publications</li>
          <li><strong>No position-talking</strong> — never push readers toward what benefits me</li>
          <li><strong>Full prompt disclosure</strong> — every Claude prompt published</li>
          <li><strong>Failure modes recorded</strong> — fabrications, misreadings, cost explosions</li>
        </ul>

        <h2>Contact</h2>
        <p>
          X: <a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer">@haruko_ai_jp</a>
        </p>
      </div>
    </div>
  );
}
