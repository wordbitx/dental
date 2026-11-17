import type { Config } from "tailwindcss";

// SmileCare Sample 01 palette — CLONE. Deep teal + mint + VERY LIGHT PURPLE accent
// (user's firm instruction: "bilkul light sa" purple).
// DEEP TEAL #0B4F5C (primary / headings / dark bands)
// MINT #F0F7F7 (page background)
// VERY LIGHT PURPLE: accent word #A78BFA, fills #DDD6FE / #EDE9FE / #C4B5FD.
// Buttons that use light purple MUST use dark teal text (never white) — the
// primary CTA stays dark teal with white text.
// (+ WhatsApp brand green, functional only)

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0B4F5C",
          deep: "#083B45",
          mid: "#14606E",
          soft: "#D9ECEF",
        },
        lav: {
          DEFAULT: "#A78BFA",
          bright: "#C4B5FD",
          deep: "#8B5CF6",
          soft: "#EDE9FE",
          pale: "#DDD6FE",
          "on-dark": "#C4B5FD",
        },
        ice: {
          DEFAULT: "#F0F7F7",
          deep: "#E2EFEF",
        },
        wa: {
          DEFAULT: "#25D366",
          dark: "#1DA851",
        },
        ink: "#0B4F5C",
        muted: "#52707C",
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(11, 79, 92, 0.14)",
        lift: "0 24px 60px -20px rgba(11, 79, 92, 0.28)",
        lav: "0 10px 30px -10px rgba(167, 139, 250, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
