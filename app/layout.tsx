import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-archaeology.vercel.app"),
  title: {
    default: "忘れられた長文発掘ノート — LLMでやる、はるこのAI考古学",
    template: "%s — 忘れられた長文発掘ノート",
  },
  description:
    "人間が読まない長尺ドキュメント（失効特許・古論文・廃止規格・軍archive・倒産企業の決算）をLLMに読ませて、現代に意味を再付与する実践記。半導体翻訳・自作AIアプリ運用と並走する第3レーン。",
  openGraph: {
    title: "忘れられた長文発掘ノート — LLMでやる、はるこのAI考古学",
    description:
      "失効特許・古論文・廃止規格をLLMで読み解く実践記。@haruko_ai_jp",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@haruko_ai_jp",
  },
  verification: {
    google: "afXlbRcyoPWsvBgTiGZX9QvShJAvSNakzguJ4halMCo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
