import type { Config } from "tailwindcss";

// SmileCare Sample 01 palette — EXACT match. Deep teal + WHITE + PEACH/ORANGE accent
// (user's firm instruction: use the orange they used in the sample).
// DEEP TEAL #0B4F5C (primary / headings / dark bands)
// WHITE #FFFFFF (page background — the sample's background is white)
// PEACH/ORANGE: accent word #F4A261, bright #F59E7B, deep #DD7E3A (hover),
//   soft #FBE3D3 (highlight card), pale #FFF1E6 (pale fills), on-dark #FCD9C0.
// Buttons that use peach MUST use dark teal text (never white) — the
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
        peach: {
          DEFAULT: "#F4A261",
          bright: "#F59E7B",
          deep: "#DD7E3A",
          soft: "#FBE3D3",
          pale: "#FFF1E6",
          "on-dark": "#FCD9C0",
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
        peach: "0 10px 30px -10px rgba(244, 162, 97, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
