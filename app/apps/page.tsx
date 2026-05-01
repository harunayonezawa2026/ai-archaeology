import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自作AIアプリ事例集",
  description: "はる子が個人開発したWebアプリ7本。人手作業をLLMで圧縮した実証集。",
};

const apps = [
  {
    name: "day1",
    tagline: "AIで何か作りたい人のための設計コンサルAI",
    desc: "Gemini 2.5 Pro が要件抽出してAIチームのZIPを返す。100名先着→セルフホスト誘導。",
    nakanuki: "AI起業相談（従来は数万円のコンサル）",
    url: "https://day1-black.vercel.app",
    launched: "2026-04-30",
  },
  {
    name: "看板AI",
    tagline: "中小事業者向け 無料LPジェネレーター",
    desc: "業種ヒアリング→LPを自動生成。1日完走で公開。",
    nakanuki: "Web制作（従来は外注で数万円〜）",
    url: "https://kanban-ai-dun.vercel.app",
    launched: "2026-04-29",
  },
  {
    name: "MediBridge",
    tagline: "多言語医療問診アプリ",
    desc: "12言語対応の医療問診をLLMでリアルタイム生成。累計200名APIガード搭載。",
    nakanuki: "医療通訳（従来は通訳者必須）",
    url: "https://medibridge-azure.vercel.app",
    launched: "2026-04-25",
  },
  {
    name: "VetBridge",
    tagline: "多言語獣医問診アプリ",
    desc: "12言語・犬/猫対応の獣医問診。MediBridgeのペット版。",
    nakanuki: "獣医通訳（従来は通訳者必須）",
    url: "https://vetbridge-three.vercel.app",
    launched: "2026-04-26",
  },
  {
    name: "うちのこのきもち",
    tagline: "ペット占いAI",
    desc: "ペットのプロフィールから占い文を生成。動画・ブログ・Xを自動運用パイプライン化。",
    nakanuki: "占い師（従来は1回数千円）",
    url: "https://uchinoko-kimochi.com",
    launched: "2026-04-19",
  },
  {
    name: "1000yen-lunch",
    tagline: "港区1000円以下ランチMAP",
    desc: "100店舗の情報をLLMで整理・更新。ガイド編集を自動化。",
    nakanuki: "グルメガイド編集（従来はライター取材）",
    url: "https://1000yen-lunch.vercel.app",
    launched: "2026-04",
  },
  {
    name: "コツコツFX手帳",
    tagline: "FX学習向けの取引ジャーナル",
    desc: "毎日のトレードを記録・振り返りするノート型アプリ。",
    nakanuki: "トレードノート手書き／表計算",
    url: "",
    launched: "2026-04-29",
  },
];

export default function AppsPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">LANE 3 — APPLICATIONS</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-3">
        自作AIアプリ事例集
      </h1>
      <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
        「人手作業をLLMで中抜きする」実証として、個人開発で本番運用しているWebアプリ7本。
        どのアプリも、従来は人間がやっていた作業を、LLMで圧縮しています。
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div
            key={app.name}
            className="border border-navy/10 rounded-lg p-6 bg-white hover:border-gold-500 transition"
          >
            <div className="text-gold-600 text-xs tracking-widest mb-1">
              LAUNCHED {app.launched}
            </div>
            <div className="font-serif text-navy text-xl font-bold mb-1">{app.name}</div>
            <div className="text-navy/70 text-sm mb-3">{app.tagline}</div>
            <div className="text-navy/80 text-sm leading-relaxed mb-4">{app.desc}</div>
            <div className="text-xs">
              <span className="text-gold-600 font-bold tracking-wide">中抜き対象 → </span>
              <span className="text-navy/70">{app.nakanuki}</span>
            </div>
            {app.url && (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-gold-600 hover:text-gold-700 text-sm font-medium"
              >
                {app.url.replace(/^https?:\/\//, "")} →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
