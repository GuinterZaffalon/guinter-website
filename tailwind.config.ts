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
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundgradient1: "#0F2845",
        backgroundgradient2: "#717297",
        background_page: "#44AF69",
        card1: "#F8333C",
        card2: "#FCAB10",
        card3: "#2B9EB3",
        boxshadow: "#DBD5B5"
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
export default config;
