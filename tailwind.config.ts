import type { Config } from "tailwindcss";

// THE DENTAL HOME palette — teal monochrome only (v3: the warm accent was
// removed at the user's request, 17 Nov 2026).
// DEEP TEAL #0B4F5C (primary / headings / dark bands)
// TEAL-DEEP #083B45 (darkest bands, hover states)
// TEAL-MID #14606E (secondary teal)
// TEAL-SOFT #D9ECEF (soft fills / highlight panels)
// WHITE #FFFFFF (page background)
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
      },
    },
  },
  plugins: [],
};

export default config;
