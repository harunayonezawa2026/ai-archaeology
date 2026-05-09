import type { Metadata } from "next";
import CagePatentsCTA from "@/components/CagePatentsCTA";

export const metadata: Metadata = {
  title: "Cage Patents — Nine Forms of 'Lock-it-in' Design Excavated by AI Archaeology",
  description:
    "Volume 2 of the AI Archaeology book series. A re-edited and expanded selection from the Phase 1 100-episode run, focused on patents that share one design philosophy: lock something inside — electrons, charges, photons, molecules, logic — and make it usable. Read through Claim 1 verbatim. Releasing June 2026, ~$15.",
};

const FORMS = [
  {
    no: 1,
    label: "Electron cage (floating gate)",
    example: "Masuoka 1980, US4531203A — Flash memory",
    note:
      "Floating gate plus control gate separated by oxide; tunneling electrons in and out. The cage that holds your SSD bits.",
  },
  {
    no: 2,
    label: "Charge cage (1T1C DRAM)",
    example: "Dennard 1968, US3387286 — DRAM",
    note: "One transistor, one capacitor. Hold the charge, refresh it before it leaks.",
  },
  {
    no: 3,
    label: "Photon cage (resonator / QD)",
    example: "Bell Labs semiconductor laser patents",
    note: "Trap light in a resonator to drive stimulated emission. Roots of every laser diode and quantum dot LED.",
  },
  {
    no: 4,
    label: "Molecular cage (clathrate / cyclodextrin)",
    example: "Sustained-release cosmetic and pharma patents",
    note: "A host molecule cages a guest, releasing it slowly. The reason your skincare actually does something for hours.",
  },
  {
    no: 5,
    label: "Ion cage (Li-ion intercalation)",
    example: "Goodenough 1980s, LiCoO₂ patents",
    note: "Layered structure that reversibly hosts lithium ions. The reason EVs and laptops happened.",
  },
  {
    no: 6,
    label: "Thermal cage (insulating package)",
    example: "MEMS and IC package thermal isolation patents",
    note: "Physically separate the heat source from the cool side. The unsung hero of every smart sensor.",
  },
  {
    no: 7,
    label: "Logic cage 1: pre-judicial era",
    example: "Backus 1957, FORTRAN — never patented",
    note:
      "Before the 1972 Gottschalk v. Benson ruling, pure software wasn't patentable. IBM caged its know-how through manuals released first, then code distributed for free.",
  },
  {
    no: 8,
    label: "Logic cage 2: unsettled era",
    example: "Atkinson 1985, HyperCard — never patented",
    note:
      "Between Diamond v. Diehr (1981) and State Street Bank (1998), eligibility was murky. Apple caged HyperCard through a 'bundled-free' contract with Atkinson, not a patent.",
  },
  {
    no: 9,
    label: "Logic cage 3: forced/voluntary openness",
    example: "BBN IMP 1969 / Xerox PARC Smalltalk 1972",
    note:
      "ARPA contract terms forced public release. Xerox chose unrestricted redistribution. By choosing not to patent, both caged a design specification inside the industry's shared vocabulary.",
  },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">BOOK — VOLUME 2 PREVIEW</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        Cage Patents — Nine Forms of &ldquo;Lock-it-in&rdquo; Design Excavated by AI Archaeology
      </h1>
      <div className="text-navy/60 text-sm mb-8">
        Releasing June 2026 ・ Indicative price ~$15 ・ ~250 pages, A5
      </div>

      <div className="prose prose-navy max-w-none mb-10">
        <p className="text-navy/80 text-base leading-relaxed">
          Across the 100 episodes of AI Archaeology Phase 1 (May 1–8, 2026), one design philosophy
          kept showing up: <strong>lock something inside, then make it useful</strong>. Electrons,
          charges, photons, molecules, ions, heat — caged by physical structure. And pure software —
          caged by judicial doctrine, contracts, or deliberate non-patenting. Volume 2 walks through
          all nine forms via Claim 1 verbatim, tracing the lineage from old patents to today&apos;s
          LLMs, SSDs, EV batteries, and sustained-release cosmetics.
        </p>
      </div>

      <h2 className="font-serif text-navy text-xl font-bold mb-4 border-l-4 border-gold-500 pl-3">
        The nine forms
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
        Who this is for
      </h2>
      <ul className="text-navy/80 text-sm leading-relaxed mb-10 list-disc list-inside space-y-1">
        <li>Engineers and investors in semiconductors, AI, EVs, and materials</li>
        <li>People who read patent doctrine as technical history</li>
        <li>Anyone who wants to back-derive today&apos;s bottlenecks from old Claim 1s</li>
        <li>Readers who&apos;ve been following the AI Archaeology series and want a curated cut</li>
      </ul>

      <h2 className="font-serif text-navy text-xl font-bold mb-4 border-l-4 border-gold-500 pl-3">
        Get notified / Early PDF
      </h2>
      <CagePatentsCTA lang="en" />

      <div className="mt-12 pt-8 border-t border-navy/10 text-navy/60 text-sm">
        Author: Haruko (Haruko Shirai) ・ X{" "}
        <a
          href="https://x.com/haruko_ai_jp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-600 hover:text-gold-700 underline"
        >
          @haruko_ai_jp
        </a>
        {" "}・ Series:{" "}
        <a href="/en" className="text-gold-600 hover:text-gold-700 underline">
          ai-archaeology.vercel.app/en
        </a>
      </div>
    </div>
  );
}
