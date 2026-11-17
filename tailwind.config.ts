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
          DEFAULT: "#0A1E3C",
          deep: "#050F1F",
          mid: "#16305A",
          soft: "#E8EDF5",
        },
        accent: {
          DEFAULT: "#0EA5E9",
          bright: "#38BDF8",
          deep: "#0369A1",
          soft: "#E0F2FE",
          "on-dark": "#7DD3FC",
        },
        wa: {
          DEFAULT: "#25D366",
          dark: "#1DA851",
        },
        ink: "#101828",
        muted: "#475569",
        paper: "#FFFFFF",
        mist: "#F4F7FB",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(10, 30, 60, 0.18)",
        lift: "0 24px 60px -20px rgba(10, 30, 60, 0.32)",
        accent: "0 10px 30px -10px rgba(14, 165, 233, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
