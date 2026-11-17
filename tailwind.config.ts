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
        ivory: {
          DEFAULT: "#FAF6EF",
          deep: "#F3EDE0",
          card: "#FFFDF8",
        },
        teal: {
          DEFAULT: "#0C3B3A",
          deep: "#082B2A",
          mid: "#14615F",
          soft: "#E4EFEA",
        },
        copper: {
          DEFAULT: "#B4653A",
          deep: "#96522E",
          soft: "#F3E4D8",
        },
        ink: "#1C2422",
        muted: "#5C6B68",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(12, 59, 58, 0.18)",
        lift: "0 24px 60px -20px rgba(12, 59, 58, 0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
