import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "I checked 100 'origin patent' claims for AI archaeology. Here's how often the popular story was wrong",
  description:
    "Eight days, 100 patents, Claim 1 verbatim where I could get it. 55 corrections to popular attribution, dating, or claim language. And one design pattern that kept showing up across 45 years: the cage.",
};

const PATTERNS = [
  {
    no: 1,
    label: "Inventor attribution wrong",
    count: "~12 cases",
    example:
      "Engelbart's mouse, US3541541 (1967): popular story says 'Engelbart and Bill English co-invented it.' The patent itself lists Douglas C. Engelbart as sole inventor. English was the SRI implementation engineer who later ran the Mother of All Demos. Joint credit got back-projected onto the legal filing.",
  },
  {
    no: 2,
    label: "Dates off by years",
    count: "~14 cases",
    example:
      "Masuoka's flash memory cell, US4531203A: many secondary sources say 'patented 1982.' Filed 1981-11-13, granted 1985-07-23, with US priority back to a Japanese filing on 1980-12-20. Three years' difference matters when you're tracing the relationship between IEDM 1984 (the 'flash' name origin) and the underlying structure patent.",
  },
  {
    no: 3,
    label: "Assignee chain collapsed",
    count: "~9 cases",
    example:
      "Avobenzone (1973), the UV filter still in your sunscreen: popular tracking stops at 'Givaudan.' The actual chain is Roure Bertrand Dupont SA → 1991 Givaudan-Roure → 2000 DSM Nutritional Products → 2023 dsm-firmenich. Patent rights, royalties, and the institutional memory of who actually filed move with these mergers; the popular story papers over it.",
  },
  {
    no: 4,
    label: "Claim 1 paraphrased to the point of distortion",
    count: "~10 cases",
    example:
      "Viterbi's algorithm patent: explanations online describe it as 'a method for decoding convolutional codes.' Claim 1 is structurally about the maximum-likelihood path-selection apparatus with specific buffer and survivor-state mechanics. The pop summary loses the structural element that made it patentable in 1967.",
  },
  {
    no: 5,
    label: "Information walls — patent number missing or unverifiable",
    count: "~10 cases",
    example:
      "Lifschütz's 1902 lanolin emulsion (the foundation of Eucerit and Beiersdorf's whole century): I couldn't find a verifiable DRP (Deutsches Reichspatent) number in 13 public-facing sources. DPMA DEPATISnet doesn't fully digitize 1900s DRPs — it requires interactive UI navigation. AI-suggested candidate numbers (DRP 132307, 154959, 171146) didn't return verifiable hits. The popular story exists; the underlying claim text is sealed behind a database wall.",
  },
];

const CAGE_FORMS = [
  { no: 1, label: "Electron cage", example: "Masuoka 1980, US4531203A — flash floating gate" },
  { no: 2, label: "Charge cage", example: "Dennard 1968, US3387286 — 1T1C DRAM" },
  { no: 3, label: "Photon cage", example: "Bell Labs semiconductor laser patent family" },
  { no: 4, label: "Molecular cage", example: "Cyclodextrin and clathrate sustained-release patents" },
  { no: 5, label: "Ion cage", example: "Goodenough 1980s, LiCoO₂ intercalation patents" },
  { no: 6, label: "Thermal cage", example: "MEMS package thermal-isolation patents" },
  { no: 7, label: "Logic cage 1: pre-judicial era", example: "Backus 1957, FORTRAN — never patented" },
  { no: 8, label: "Logic cage 2: unsettled era", example: "Atkinson 1985, HyperCard — never patented" },
  { no: 9, label: "Logic cage 3: forced/voluntary openness", example: "BBN IMP 1969 / Xerox PARC Smalltalk 1972" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="text-gold-600 text-xs tracking-[0.3em] mb-3">ESSAY ・ AI ARCHAEOLOGY</div>
      <h1 className="font-serif text-navy text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        I checked 100 &ldquo;origin patent&rdquo; claims for AI archaeology. Here&apos;s how often
        the popular story was wrong
      </h1>
      <div className="text-navy/60 text-sm mb-10">
        Haruko ・ 2026-05-10 ・ {" "}
        <Link href="/en" className="text-gold-600 hover:text-gold-700 underline">
          AI Archaeology
        </Link>
      </div>

      <div className="prose prose-navy max-w-none space-y-6 text-navy/85 text-base leading-relaxed">
        <p>
          For eight days in May 2026, I read patent Claim 1s the way other people read a daily
          newspaper. One every couple of hours. A hundred of them, end to end.
        </p>

        <p>
          The plan was small: I wanted to know whether old &ldquo;origin patents&rdquo; — the ones
          tech writers cite when they explain how flash memory or DRAM or the mouse or
          avobenzone or LiCoO<sub>2</sub> &ldquo;started&rdquo; — actually said what people quote
          them as saying. I&apos;m not a patent attorney. I read them as historical artifacts.
          What does the front page list as the inventor? What does the assignee field say? What
          does Claim 1 actually claim? Where does the popular tech-history version line up, and
          where does it drift?
        </p>

        <p>
          By the time I&apos;d gone through 100 episodes, I had recorded{" "}
          <strong>55 corrections</strong> to the database I started with — a database I&apos;d
          assembled from secondary sources before doing the work. Not minor stylistic edits.
          Wrong inventors. Wrong dates by multiple years. Wrong assignee chains. Claim 1 language
          that didn&apos;t match what the popular summary said.
        </p>

        <p>
          And there was one design pattern that kept showing up, across decades, fields, and
          continents: <strong>the cage</strong>. Lock something inside, then make it useful.
          Across 100 patents I counted nine different forms of it.
        </p>

        <p>This is what eight days of reading told me.</p>

        <h2 className="font-serif text-navy text-2xl font-bold mt-12 mb-4 border-l-4 border-gold-500 pl-3">
          The method, briefly
        </h2>

        <p>
          The unit of work was an &ldquo;episode&rdquo;: pick a candidate patent, pull the Claim 1
          text from a primary source where possible (Google Patents PDF for old US grants, USPTO
          Patent Public Search where it cooperated, EPO Espacenet for European filings), compare
          against the popular tech-history narrative, and write up the gap. Total run: 100
          episodes across four sub-series — Patent Archaeology, Hardware/Energy Patents, Software
          UI Patents, and a Cosmetic/Pharma branch.
        </p>

        <p>
          Where I couldn&apos;t reach the primary source — e.g., 1900s German Reichspatents that
          DPMA hasn&apos;t fully digitized; ancient Japanese filings on J-PlatPat that require
          interactive search — I logged the wall instead of inventing around it.{" "}
          <em>Failure to retrieve</em> turned out to be a finding in its own right, and I&apos;ll
          come back to it.
        </p>

        <h2 className="font-serif text-navy text-2xl font-bold mt-12 mb-4 border-l-4 border-gold-500 pl-3">
          Five patterns of how the popular story was wrong
        </h2>

        <p>
          Sorting the 55 corrections, they collapse into five recurring shapes. Counts are
          approximate because some corrections cross categories.
        </p>

        <div className="space-y-6 mt-8">
          {PATTERNS.map((p) => (
            <div key={p.no} className="border-l-2 border-gold-500/60 pl-5">
              <div className="text-gold-600 text-xs tracking-widest mb-1">
                PATTERN {p.no} ・ {p.count}
              </div>
              <div className="font-serif text-navy text-lg font-bold mb-2">{p.label}</div>
              <p className="text-navy/85 text-sm leading-relaxed">{p.example}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-navy text-2xl font-bold mt-12 mb-4 border-l-4 border-gold-500 pl-3">
          Why this drift happens
        </h2>

        <p>
          None of these are conspiracies. They&apos;re what happens when patent text gets passed
          through several rewrites — a press release at filing, a Wikipedia paraphrase ten years
          later, a textbook quoting the Wikipedia version, a tech blog quoting the textbook —
          before reaching the reader who&apos;s &ldquo;explaining&rdquo; the origin. Each step
          smooths the legal language and adds the social context the writer cares about. By the
          fourth or fifth hop, what&apos;s left is a story that fits the field&apos;s narrative
          arc, with the patent&apos;s actual structural claims sanded off.
        </p>

        <p>
          The frustrating case is Pattern 5 — information walls. Even if you want to read the
          original, you can&apos;t always get there. The 1900s DRPs are a good example: every
          German cosmetics or pharma history that mentions Eucerit or Lifschütz cites a popular
          story that&apos;s probably correct in spirit, but the underlying patent number — the
          thing that would let you verify Claim 1 — is sealed behind an interactive search UI on
          DPMA DEPATISnet, which automated tooling can&apos;t cleanly traverse. Three centuries
          of patent law collide with twenty years of OCR limitations and you get a database that
          knows the answer but can&apos;t hand it to you in machine-readable form.
        </p>

        <h2 className="font-serif text-navy text-2xl font-bold mt-12 mb-4 border-l-4 border-gold-500 pl-3">
          The pattern that kept showing up: the cage
        </h2>

        <p>
          The thing I didn&apos;t expect was how often the same design philosophy appeared in
          patents that, on the surface, are doing completely different things. Storing data,
          burning fat, lighting a room, releasing a fragrance, running a programming language.
          The shared move:{" "}
          <strong>
            confine something — electrons, charges, photons, molecules, ions, heat, or even
            software know-how — and make the confinement itself the useful structure
          </strong>
          .
        </p>

        <p>I&apos;m calling these <em>cage patents</em>. Across the 100 episodes I counted nine forms:</p>

        <div className="grid sm:grid-cols-2 gap-3 my-8">
          {CAGE_FORMS.map((c) => (
            <div key={c.no} className="border border-navy/10 rounded p-3 bg-navy/5">
              <div className="text-gold-600 text-xs tracking-widest mb-1">FORM #{c.no}</div>
              <div className="font-serif text-navy text-sm font-bold">{c.label}</div>
              <div className="text-navy/70 text-xs mt-1">{c.example}</div>
            </div>
          ))}
        </div>

        <p>
          Forms 1–6 are physical: literal walls of oxide, dielectric, layered crystal, host
          molecule, or insulating substrate, with something trapped inside. Forms 7–9 are
          something stranger — they&apos;re cages made of <em>doctrine</em>. Pure software
          inventions before <em>Gottschalk v. Benson</em> (1972) couldn&apos;t be patented at
          all; IBM caged FORTRAN&apos;s know-how through manuals released first and code
          distributed for free. Atkinson&apos;s HyperCard (1985–87) hit the unsettled era
          between <em>Diamond v. Diehr</em> and <em>State Street Bank</em>; Apple caged it
          through a bundled-distribution contract instead of a patent. ARPA&apos;s contract
          terms forced the BBN IMP design (1969) into the public domain via Report 1822 →
          DDC → RFC; Xerox PARC voluntarily released Smalltalk-80 for unrestricted
          redistribution in 1981. By choosing not to patent, both organizations caged a
          design specification inside the industry&apos;s shared vocabulary, which turned out
          to be more durable than any 17-year exclusion right.
        </p>

        <p>
          The reason this matters for &ldquo;AI archaeology&rdquo;: when you&apos;re trying to
          predict where the next bottleneck is, the cage patents are where the bottleneck has
          historically lived. Flash storage limits, DRAM scaling, photonic compute density,
          drug bioavailability, EV cathode chemistry — every one of these has a Claim 1
          somewhere that defines what gets confined and how. That&apos;s where the engineering
          slack is. That&apos;s where the next 5x lives, or doesn&apos;t.
        </p>

        <h2 className="font-serif text-navy text-2xl font-bold mt-12 mb-4 border-l-4 border-gold-500 pl-3">
          What this is, and what this isn&apos;t
        </h2>

        <p>
          This is technical history and a market hypothesis. It is{" "}
          <strong>not legal analysis</strong>. I&apos;m a non-lawyer reading public patent
          documents because I&apos;m curious about how the original Claim 1 language compares
          to what people quote. Claim scope, infringement, prosecution history, doctrine of
          equivalents — those are practitioner questions and I don&apos;t pretend to answer
          them. If you&apos;re a patent attorney and you spot a claim I&apos;ve misread,
          please tell me; I&apos;ll correct it the same way I corrected the 55 entries already.
        </p>

        <p>
          The five patterns above aren&apos;t evidence that secondary tech writing is
          systematically dishonest. They&apos;re evidence that <em>any</em> primary source,
          quoted across enough hops, drifts. The cage finding isn&apos;t a theory of
          everything — it&apos;s one design pattern that recurred with surprising frequency in
          a sample of 100 patents I happened to read in May 2026.
        </p>

        <p>
          I&apos;d like to know whether patent practitioners reading this see the
          drift-by-paraphrase pattern as something they encounter routinely, and whether the
          cage framing tracks with how they categorize structural claims. If you&apos;ve seen
          better systematic ways to read old Claim 1s as historical artifacts, I&apos;m
          interested.
        </p>

        <hr className="my-12 border-navy/10" />

        <p className="text-navy/60 text-sm">
          The 100 episodes are at{" "}
          <Link href="/en" className="text-gold-600 hover:text-gold-700 underline">
            ai-archaeology.vercel.app/en
          </Link>
          . A long-form treatment of the nine cage forms — Volume 2 of the AI Archaeology book
          series, with Claim 1 verbatim for every form — is in preparation for June 2026.
          Notification signup:{" "}
          <Link
            href="/en/book/cage-patents-preview?src=essay_d2"
            className="text-gold-600 hover:text-gold-700 underline"
          >
            Cage Patents preview
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
