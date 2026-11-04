import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: "#F0F4FA",
          100: "#D9E4F2",
          200: "#B0C8E5",
          300: "#7FA8D3",
          400: "#4D83BD",
          500: "#265FA3",
          600: "#184782",
          700: "#123564",
          800: "#0E274D",
          900: "#0B1F3F", // Primary Brand Deep Navy
          950: "#061329", // Deepest Midnight Navy
        },
        gold: {
          50: "#FCF9EF",
          100: "#F7F0D8",
          200: "#EEDEB1",
          300: "#E6C766", // Rich Light Gold
          400: "#DAB543",
          500: "#C9A227", // Primary Rich Gold from Logo
          600: "#A68318", // Deep Warm Gold
          700: "#7D6110",
          800: "#56420A",
          900: "#312505",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FAF8F5",
          200: "#F4F0E8",
          300: "#EDE6D8",
          400: "#E2D6C0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -4px rgba(201, 162, 39, 0.35)",
        "gold-glow-lg": "0 0 50px -5px rgba(201, 162, 39, 0.45)",
        "navy-glow": "0 10px 30px -10px rgba(11, 31, 63, 0.5)",
        "luxury-card": "0 20px 40px -15px rgba(11, 31, 63, 0.12), 0 1px 0 0 rgba(201, 162, 39, 0.2) inset",
        "luxury-dark": "0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 1px 0 0 rgba(201, 162, 39, 0.2) inset",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6C766 0%, #C9A227 50%, #A68318 100%)",
        "navy-gradient": "linear-gradient(135deg, #0B1F3F 0%, #061329 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(230, 199, 102, 0.3), transparent)",
        "radial-navy": "radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.15) 0%, rgba(11, 31, 63, 0.95) 70%, #061329 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
