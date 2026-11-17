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
        teal: {
          DEFAULT: "#07332F",
          deep: "#04231F",
          mid: "#0C4A43",
          soft: "#DCEDEA",
        },
        gold: {
          DEFAULT: "#C9A227",
          bright: "#E3B93C",
          deep: "#9C7E1A",
          soft: "#F7ECD0",
        },
        ink: "#101B19",
        muted: "#4A5A57",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["Archivo", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(7, 51, 47, 0.20)",
        lift: "0 24px 60px -20px rgba(7, 51, 47, 0.35)",
        gold: "0 10px 30px -10px rgba(201, 162, 39, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
