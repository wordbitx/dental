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
        amber: {
          DEFAULT: "#D97706",
          bright: "#E8A317",
          deep: "#92400E",
          soft: "#FDF0D5",
        },
        ink: "#101828",
        muted: "#57534E",
        paper: "#FFFFFF",
        cream: "#F8F7F4",
      },
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(10, 30, 60, 0.18)",
        lift: "0 24px 60px -20px rgba(10, 30, 60, 0.32)",
        amber: "0 10px 30px -10px rgba(217, 119, 6, 0.50)",
      },
    },
  },
  plugins: [],
};

export default config;
