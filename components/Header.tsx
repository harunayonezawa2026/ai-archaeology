"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");

  const t = isEn
    ? { tagline: "AI Archaeology", title: "Mining Forgotten Documents", articles: "Episodes", apps: "Apps", about: "About", lang: "日本語", langHref: pathname.replace(/^\/en/, "") || "/" }
    : { tagline: "AI ARCHAEOLOGY", title: "忘れられた長文発掘ノート", articles: "記事", apps: "アプリ", about: "著者", lang: "EN", langHref: "/en" + (pathname === "/" ? "" : pathname) };

  const base = isEn ? "/en" : "";

  return (
    <header className="border-b border-navy/10 bg-paper/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href={isEn ? "/en" : "/"} className="group">
          <div className="font-serif text-navy text-base sm:text-lg leading-tight">
            <div className="text-gold-600 text-xs tracking-widest mb-0.5">{t.tagline}</div>
            <div className="font-bold">{t.title}</div>
          </div>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5 text-sm">
          <Link href={isEn ? "/en" : "/"} className="text-navy hover:text-gold-600">{t.articles}</Link>
          <Link href={`${base}/apps`} className="text-navy hover:text-gold-600">{t.apps}</Link>
          <Link href={`${base}/about`} className="text-navy hover:text-gold-600">{t.about}</Link>
          <a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold-600">X</a>
          <Link href={t.langHref} className="text-gold-600 font-bold hover:text-gold-700 border border-gold-500 px-2 py-0.5 rounded">{t.lang}</Link>
        </nav>
      </div>
    </header>
  );
}
