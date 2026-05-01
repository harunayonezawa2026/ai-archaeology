"use client";

import { useState } from "react";

const WEB3FORMS_KEY = "9b91ee9a-8212-4a0a-bd3a-e790b2964026";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_KEY);
    payload.append("subject", "[AI考古学] 新規購読登録");
    payload.append("from_name", "AI Archaeology Newsletter");
    payload.append("email", email);
    payload.append("message", `新規購読登録: ${email}\n登録日時: ${new Date().toISOString()}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-6 pt-6 border-t border-paper/20">
      <div className="text-gold-500 text-xs tracking-widest mb-2">NEWSLETTER</div>
      <div className="text-paper/80 text-sm mb-3 max-w-md leading-relaxed">
        新エピソード公開時にメールで通知します。スパムは送りません、購読解除はいつでも返信1通で。
      </div>
      {status === "success" ? (
        <div className="text-gold-400 text-sm">登録ありがとうございます。次回エピソード公開時にメールします。</div>
      ) : (
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
            disabled={status === "submitting"}
            className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-navy font-bold text-sm rounded transition disabled:opacity-50"
          >
            {status === "submitting" ? "送信中..." : "登録"}
          </button>
        </form>
      )}
      {status === "error" && (
        <div className="text-red-300 text-xs mt-2">送信に失敗しました。時間をおいてもう一度お試しください。</div>
      )}
    </div>
  );
}
