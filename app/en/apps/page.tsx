import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 Web Apps — Lane 3 of AI Archaeology",
  description: "Seven production web apps as proof-of-concept of human-to-LLM compression.",
};

const apps = [
  { name: "day1", tagline: "AI consulting AI for non-engineers", desc: "Gemini 2.5 Pro extracts requirements and returns a downloadable AI team ZIP. First 100 free, then self-host.", compress: "AI consulting (was: paid consultants)", url: "https://day1-black.vercel.app", launched: "2026-04-30" },
  { name: "kanban-AI", tagline: "Free LP generator for SMBs", desc: "Industry interview → LP auto-generation. Built and shipped in one day.", compress: "Web design (was: paid agency work)", url: "https://kanban-ai-dun.vercel.app", launched: "2026-04-29" },
  { name: "MediBridge", tagline: "12-language medical questionnaire app", desc: "Real-time multilingual medical intake powered by LLM. Daily API guard at 200 patients.", compress: "Medical interpretation (was: human interpreters)", url: "https://medibridge-azure.vercel.app", launched: "2026-04-25" },
  { name: "VetBridge", tagline: "12-language veterinary questionnaire app", desc: "Pet version of MediBridge for dogs and cats.", compress: "Veterinary interpretation (was: human interpreters)", url: "https://vetbridge-three.vercel.app", launched: "2026-04-26" },
  { name: "uchinoko-kimochi", tagline: "Pet fortune-telling AI", desc: "Generates daily fortunes from pet profiles. Video / blog / X auto-pipeline shipped.", compress: "Fortune telling (was: paid fortune tellers)", url: "https://uchinoko-kimochi.com", launched: "2026-04-19" },
  { name: "1000yen-lunch", tagline: "Tokyo Minato sub-1000-yen lunch map", desc: "100 stores curated by LLM. Editing automated.", compress: "Restaurant guide editing (was: human writers)", url: "https://1000yen-lunch.vercel.app", launched: "2026-04" },
  { name: "kotsukotsu-fx", tagline: "FX trade journal for learners", desc: "Daily trade logging and reflection notebook app.", compress: "Trade journaling (was: handwriting / spreadsheets)", url: "", launched: "2026-04-29" },
];

export default function AppsEN() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">LANE 3 — APPLICATIONS</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-3">
        Seven Production Web Apps
      </h1>
      <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
        Proof-of-concept of "human-to-LLM compression". Each app replaces something humans used to do
        manually — fortune telling, medical interpretation, LP design — with an LLM.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div key={app.name} className="border border-navy/10 rounded-lg p-6 bg-white hover:border-gold-500 transition">
            <div className="text-gold-600 text-xs tracking-widest mb-1">LAUNCHED {app.launched}</div>
            <div className="font-serif text-navy text-xl font-bold mb-1">{app.name}</div>
            <div className="text-navy/70 text-sm mb-3">{app.tagline}</div>
            <div className="text-navy/80 text-sm leading-relaxed mb-4">{app.desc}</div>
            <div className="text-xs">
              <span className="text-gold-600 font-bold tracking-wide">COMPRESSED → </span>
              <span className="text-navy/70">{app.compress}</span>
            </div>
            {app.url && (
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-gold-600 hover:text-gold-700 text-sm font-medium">
                {app.url.replace(/^https?:\/\//, "")} →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
