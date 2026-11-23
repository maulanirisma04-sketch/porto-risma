import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f1f3d",
          900: "#0b1730",
          800: "#0f1f3d",
          700: "#1b2f57",
          600: "#2a416f",
        },
        sky: {
          soft: "#e8f0fb",
          accent: "#6b9bd6",
          deep: "#3d6fb3",
        },
        ink: {
          DEFAULT: "#1f2937",
          muted: "#5b6577",
          line: "#e5e9f0",
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans Variable'", "'Inter Variable'", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.3s ease-out both",
        "modal-in": "modal-in 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
