"use client";

import { useEffect, useState } from "react";

const WEB3FORMS_KEY = "df647aec-bd02-44f1-94fb-a28aec801f21";

type Intent = "notify" | "early-pdf";
type Lang = "ja" | "en";

const COPY = {
  ja: {
    title: "発売通知 / 早期PDF版を希望する",
    notifyLabel: "発売したらメールで通知",
    earlyLabel: "早期PDF版（先行販売）に関心あり",
    emailPlaceholder: "メールアドレス",
    submit: "送信",
    success: "受け付けました。発売準備が整い次第ご連絡します。",
    failure: "送信に失敗しました。もう一度お試しください。",
    sampleLink: "無料サンプルを読む（舛岡富士雄 1980 浮遊ゲート Cage 特許 US4531203A 全文解説）",
  },
  en: {
    title: "Notify me on launch / Early PDF",
    notifyLabel: "Notify me when the book is out",
    earlyLabel: "Interested in the early PDF edition",
    emailPlaceholder: "Email address",
    submit: "Submit",
    success: "Got it. We'll reach out when the book is ready.",
    failure: "Submission failed. Please try again.",
    sampleLink: "Read a free sample (Masuoka 1980 floating-gate Cage patent US4531203A, full claim walkthrough)",
  },
};

export default function CagePatentsCTA({ lang }: { lang: Lang }) {
  const [intent, setIntent] = useState<Intent>("notify");
  const [email, setEmail] = useState("");
  const [src, setSrc] = useState("direct");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "ng">("idle");
  const t = COPY[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("src");
    if (s) setSrc(s);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    const body = new FormData();
    body.append("access_key", WEB3FORMS_KEY);
    body.append("subject", `Cage Patents Preview — ${intent} (${lang}, src=${src})`);
    body.append("from_name", "Cage Patents LP");
    body.append("email", email);
    body.append("intent", intent);
    body.append("lang", lang);
    body.append("src", src);
    body.append("page", `cage-patents-preview-${lang}`);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        setStatus("ng");
      }
    } catch {
      setStatus("ng");
    }
  }

  const sampleHref =
    lang === "ja"
      ? `/notes/70-hardware-energy-patent-04?src=${encodeURIComponent(src)}_sample`
      : `/en/notes/70-hardware-energy-patent-04?src=${encodeURIComponent(src)}_sample`;

  return (
    <div className="border border-gold-500/40 rounded-lg p-6 bg-navy/5">
      <div className="font-serif text-navy text-xl font-bold mb-4">{t.title}</div>

      <a
        href={sampleHref}
        className="block mb-6 text-gold-600 hover:text-gold-700 text-sm font-medium underline"
      >
        {t.sampleLink} →
      </a>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="intent"
              value="notify"
              checked={intent === "notify"}
              onChange={() => setIntent("notify")}
              className="accent-gold-500"
            />
            <span>{t.notifyLabel}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="intent"
              value="early-pdf"
              checked={intent === "early-pdf"}
              onChange={() => setIntent("early-pdf")}
              className="accent-gold-500"
            />
            <span>{t.earlyLabel}</span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            required
            className="flex-1 px-3 py-2 bg-white border border-navy/30 rounded text-navy placeholder-navy/40 text-sm focus:outline-none focus:border-gold-500"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-4 py-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy font-bold text-sm rounded transition"
          >
            {t.submit}
          </button>
        </div>

        {status === "ok" && (
          <div className="text-sm text-green-700 mt-2">{t.success}</div>
        )}
        {status === "ng" && (
          <div className="text-sm text-red-600 mt-2">{t.failure}</div>
        )}
      </form>
    </div>
  );
}
