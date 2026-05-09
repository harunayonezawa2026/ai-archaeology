import type { Metadata } from "next";
import CagePatentsCTA from "@/components/CagePatentsCTA";

export const metadata: Metadata = {
  title: "Cage Patents — AI 考古学が発掘した「閉じ込めて使う」9 形態",
  description:
    "Phase 1 100 本のうち Cage 関連 10 本を再編集＋書下ろし補強した書籍第 2 巻。電子・電荷・分子・論理を物理的／規範的に閉じ込める設計思想を、Claim 1 verbatim で読み解く。2026 年 6 月公開予定、¥1,800 想定。",
};

const FORMS = [
  {
    no: 1,
    label: "電子 cage（浮遊ゲート）",
    example: "舛岡富士雄 1980 US4531203A — フラッシュメモリ",
    note: "浮遊ゲートと制御ゲートの間に絶縁膜を挟み、電子をトンネルで出し入れする物理構造で、電子を「閉じ込める」",
  },
  {
    no: 2,
    label: "電荷 cage（DRAM 1 トランジスタ 1 キャパシタ）",
    example: "Dennard 1968 US3387286 — DRAM",
    note: "1 ビット = 1 キャパシタの電荷を閉じ込め、リフレッシュで再充電する 1T1C 構造",
  },
  {
    no: 3,
    label: "光子 cage（共振器・QD）",
    example: "Bell Labs 半導体レーザー特許群",
    note: "光を共振器内に閉じ込めて誘導放出を起こす、半導体レーザー・量子ドット系の起点",
  },
  {
    no: 4,
    label: "分子 cage（クラスレート水和物）",
    example: "化粧品・医薬の徐放性製剤特許",
    note: "ホスト分子の籠の中にゲスト分子を閉じ込め、徐々に放出する。シクロデキストリン等",
  },
  {
    no: 5,
    label: "イオン cage（リチウムイオン電池）",
    example: "Goodenough 1980s LiCoO2 特許",
    note: "層状構造の隙間にリチウムイオンを可逆的に挿入・脱離させる充放電構造",
  },
  {
    no: 6,
    label: "熱 cage（断熱構造）",
    example: "MEMS / 半導体パッケージ熱絶縁特許",
    note: "発熱源と冷却部を物理的に分離し、熱を局所に閉じ込めるパッケージ設計",
  },
  {
    no: 7,
    label: "論理 cage 1：適格性壁（pre-judicial era）",
    example: "Backus 1957 FORTRAN — 特許なし",
    note: "1972 Gottschalk v. Benson 判例以前、純ソフトウェアは特許化されず、IBM はマニュアル先行公開で knowledge を「閉じ込めて」配布した",
  },
  {
    no: 8,
    label: "論理 cage 2：適格性壁（unsettled era）",
    example: "Atkinson 1985 HyperCard — 特許なし",
    note: "1981 Diamond v. Diehr → 1998 State Street Bank の判例 unsettled 期、Apple は HyperCard を「無料同梱」条件で譲受、特許ではなく契約で閉じ込めた",
  },
  {
    no: 9,
    label: "論理 cage 3：政府契約・自発公開",
    example: "BBN IMP 1969 / Xerox PARC Smalltalk 1972",
    note: "ARPA 契約による強制公開、Xerox 自社判断による unrestricted redistribution。特許化「しない」ことで、設計を業界に広く閉じ込めた",
  },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">BOOK — VOLUME 2 PREVIEW</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        Cage Patents — AI 考古学が発掘した「閉じ込めて使う」9 形態
      </h1>
      <div className="text-navy/60 text-sm mb-8">
        2026 年 6 月公開予定 ・ 想定価格 ¥1,800 ・ A5 判 約 250 ページ
      </div>

      <div className="prose prose-navy max-w-none mb-10">
        <p className="text-navy/80 text-base leading-relaxed">
          AI 考古学 Phase 1（連載 100 本、2026-05-01〜2026-05-08）で発掘した特許の中で、
          <strong>「閉じ込めて使う」</strong> という設計思想に貫かれた一群がある。電子・電荷・光子・分子・イオン・熱を物理的に閉じ込める構造特許 6 形態と、
          純ソフトウェアを判例壁・契約・公開戦略で「特許化せず閉じ込める」論理 cage 3 形態。書籍第 2 巻はこの 9 形態を Claim 1 verbatim で読み解き、
          現代 LLM・SSD・EV バッテリー・化粧品徐放剤までの系譜を追う。
        </p>
      </div>

      <h2 className="font-serif text-navy text-xl font-bold mb-4 border-l-4 border-gold-500 pl-3">
        9 形態の概要
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {FORMS.map((f) => (
          <div
            key={f.no}
            className="border border-navy/10 rounded-lg p-4 bg-white"
          >
            <div className="text-gold-600 text-xs tracking-widest mb-1">
              FORM #{f.no}
            </div>
            <div className="font-serif text-navy text-base font-bold mb-1">
              {f.label}
            </div>
            <div className="text-navy/70 text-xs mb-2">{f.example}</div>
            <div className="text-navy/80 text-sm leading-relaxed">{f.note}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-navy text-xl font-bold mb-4 border-l-4 border-gold-500 pl-3">
        想定読者
      </h2>
      <ul className="text-navy/80 text-sm leading-relaxed mb-10 list-disc list-inside space-y-1">
        <li>半導体・AI・EV・素材産業の技術者・投資家</li>
        <li>特許制度を技術史として読みたい人</li>
        <li>古い Claim 1 から現代の bottleneck を逆算したい人</li>
        <li>『AI 考古学』連載のサブシリーズを通して読みたい人</li>
      </ul>

      <h2 className="font-serif text-navy text-xl font-bold mb-4 border-l-4 border-gold-500 pl-3">
        購読・通知登録
      </h2>
      <CagePatentsCTA lang="ja" />

      <div className="mt-12 pt-8 border-t border-navy/10 text-navy/60 text-sm">
        著者：はる子（白井春子）／X{" "}
        <a
          href="https://x.com/haruko_ai_jp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-600 hover:text-gold-700 underline"
        >
          @haruko_ai_jp
        </a>
        ／連載本体：
        <a href="/" className="text-gold-600 hover:text-gold-700 underline">
          ai-archaeology.vercel.app
        </a>
      </div>
    </div>
  );
}
