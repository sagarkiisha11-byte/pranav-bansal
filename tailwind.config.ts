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
        gold: {
          50: "#FAF6EE",
          100: "#F4ECD8",
          200: "#E8D7B0",
          300: "#DFC082",
          400: "#C5A059",
          500: "#AA853D",
          600: "#8A692C",
          700: "#694F21",
          800: "#4D3A19",
          900: "#2E220F",
        },
        obsidian: {
          950: "#07080B",
          900: "#0C0E14",
          850: "#11141D",
          800: "#171B26",
          700: "#222736",
          600: "#32394E",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -4px rgba(197, 160, 89, 0.25)",
        "gold-glow-lg": "0 0 50px -5px rgba(197, 160, 89, 0.35)",
        "luxury-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 1px 0 0 rgba(197, 160, 89, 0.15) inset",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #DFC082 0%, #C5A059 50%, #9D7A37 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(223, 192, 130, 0.2), transparent)",
        "radial-dark": "radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.08) 0%, transparent 70%)",
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
