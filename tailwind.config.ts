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
        ocean: {
          50: "#E8F1F8",
          100: "#C5DBEE",
          500: "#1B4B7A",
          700: "#123456",
        },
        sand: {
          50: "#FDF8EE",
          100: "#F4E4BC",
          500: "#C9A227",
          700: "#8B7019",
        },
        forest: {
          50: "#EAF3E8",
          500: "#2D5A27",
          700: "#1E3D1A",
        },
        arcade: {
          cyan: "#22d3ee",
          yellow: "#facc15",
          purple: "#7c3aed",
          lime: "#a3e635",
          navy: "#12082b",
          panel: "#2a145a",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          500: "#6B7280",
          700: "#374151",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        arcade: "6px 6px 0 #000",
        "arcade-sm": "3px 3px 0 #000",
        "arcade-press": "2px 2px 0 #000",
      },
    },
  },
  plugins: [],
};
export default config;
