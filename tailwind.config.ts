import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          50: "#f4f6f9",
          100: "#e1e7ee",
          900: "#0a1628",
          950: "#050b14",
        },
        gold: {
          DEFAULT: "#c9a85c",
          400: "#d4b876",
          500: "#c9a85c",
          600: "#b08e3f",
        },
        paper: "#faf8f3",
        ink: "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Hiragino Kaku Gothic ProN", "Yu Gothic", "sans-serif"],
        serif: ["var(--font-noto-serif)", "Hiragino Mincho ProN", "Yu Mincho", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#1a1a1a",
            a: { color: "#b08e3f", textDecoration: "underline" },
            "h1, h2, h3": { color: "#0a1628", fontWeight: "700" },
            blockquote: { borderLeftColor: "#c9a85c", color: "#1a1a1a" },
            code: { color: "#0a1628", backgroundColor: "#f4f6f9", padding: "0.15em 0.35em", borderRadius: "0.25em", fontWeight: "500" },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
