import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-navy/10 bg-paper/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="group">
          <div className="font-serif text-navy text-base sm:text-lg leading-tight">
            <div className="text-gold-600 text-xs tracking-widest mb-0.5">AI ARCHAEOLOGY</div>
            <div className="font-bold">忘れられた長文発掘ノート</div>
          </div>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          <Link href="/" className="text-navy hover:text-gold-600">記事</Link>
          <Link href="/apps" className="text-navy hover:text-gold-600">アプリ</Link>
          <Link href="/about" className="text-navy hover:text-gold-600">著者</Link>
          <a href="https://x.com/haruko_ai_jp" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold-600">X</a>
        </nav>
      </div>
    </header>
  );
}
