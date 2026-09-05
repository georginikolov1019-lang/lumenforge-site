import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        ink: "#0a0a0c",
        "slate-deep": "#12121a",
        lumen: { ink: "#05060a", panel: "#0c0e16", violet: "#8b5cf6", blue: "#38bdf8", indigo: "#6366f1" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(99, 102, 241, 0.35)",
        "glow-sm": "0 0 24px rgba(56, 189, 248, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
