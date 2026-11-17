import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#06101F",
          mid: "#14315C",
          soft: "#E4EAF3",
        },
        amber: {
          DEFAULT: "#F59E0B",
          bright: "#FFB020",
          deep: "#B45309",
          soft: "#FEF3C7",
        },
        ink: "#0F172A",
        muted: "#475569",
        paper: "#FFFFFF",
        mist: "#F1F5F9",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(11, 31, 58, 0.20)",
        lift: "0 24px 60px -20px rgba(11, 31, 58, 0.35)",
        amber: "0 10px 30px -10px rgba(245, 158, 11, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
