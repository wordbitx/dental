import type { Config } from "tailwindcss";

// ALBA reference palette — exactly three colors:
// ICE WHITE #F4F8FA · DEEP TEAL #0F3D47 · SOFT PEACH #F59E7B
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
          DEFAULT: "#0F3D47",
          deep: "#0A2E36",
          mid: "#17525F",
          soft: "#DCE9EC",
        },
        peach: {
          DEFAULT: "#F59E7B",
          bright: "#F7B193",
          deep: "#D97E5C",
          soft: "#FDE9E0",
          "on-dark": "#F9C4AC",
        },
        ice: {
          DEFAULT: "#F4F8FA",
          deep: "#E9F1F4",
        },
        wa: {
          DEFAULT: "#25D366",
          dark: "#1DA851",
        },
        ink: "#0F3D47",
        muted: "#5A7280",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 61, 71, 0.14)",
        lift: "0 24px 60px -20px rgba(15, 61, 71, 0.28)",
        peach: "0 10px 30px -10px rgba(245, 158, 123, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
