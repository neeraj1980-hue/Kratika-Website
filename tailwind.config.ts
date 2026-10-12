import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          950: "#030712",
          900: "#060b24",
          850: "#0a1236",
          800: "#0f1c4d",
          700: "#162b70",
          600: "#1d3e9c",
          500: "#2563eb",
          400: "#38bdf8",
          300: "#7dd3fc",
          200: "#bae6fd",
          100: "#e0f2fe",
          50: "#f0f9ff",
        },
        starlight: {
          blue: "#38bdf8",
          cyan: "#22d3ee",
          indigo: "#6366f1",
          violet: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "meteor": "meteor 5s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-600px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "space-radial": "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.18), transparent 70%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.12), transparent 50%), radial-gradient(circle at 10% 60%, rgba(99, 102, 241, 0.15), transparent 60%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #2563eb 0deg, #38bdf8 120deg, #6366f1 240deg, #2563eb 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;
