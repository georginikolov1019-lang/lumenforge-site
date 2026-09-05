import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        ink: "#0a0a0c",
        "slate-deep": "#12121a",
        "slate-mist": "#1c1c28",
        "amber-glow": "#f5a623",
        "amber-soft": "#d4a017",
        "amber-dim": "#8a6914",
        frost: "#6ec1ff",
        "frost-dim": "#3a7ab8",
        "frost-soft": "#a8d8ff",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,166,35,0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(110,193,255,0.12), transparent)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
