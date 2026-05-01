"use client";

import { useState } from "react";

const SUBSTACK_URL = "https://harukoai.substack.com";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const url = `${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setEmail("");
  }

  return (
    <div className="mt-6 pt-6 border-t border-paper/20">
      <div className="text-gold-500 text-xs tracking-widest mb-2">NEWSLETTER (SUBSTACK)</div>
      <div className="text-paper/80 text-sm mb-3 max-w-md leading-relaxed">
        新エピソード公開時にメールで通知します。配信は Substack 経由（無料）。本ノートの全文はこの本体LPで公開、Substackは更新通知＋要約配信用です。
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          required
          className="flex-1 px-3 py-2 bg-paper/10 border border-paper/30 rounded text-paper placeholder-paper/50 text-sm focus:outline-none focus:border-gold-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-navy font-bold text-sm rounded transition"
        >
          Substackで購読
        </button>
      </form>
      <div className="mt-3 text-xs text-paper/60">
        または直接：<a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-500">harukoai.substack.com</a>
      </div>
    </div>
  );
}
