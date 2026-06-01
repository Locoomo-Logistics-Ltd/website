import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  // Use class strategy so ThemeProvider can toggle via className
  darkMode: ["class", ".dark-mode"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Font families reference CSS vars set by next/font ──
      fontFamily: {
        display: ["var(--font-display)", "Sora", "sans-serif"],
        sans:    ["var(--font-sans)", "DM Sans", "sans-serif"],
      },

      // ── Colours — use CSS vars so light/dark works automatically ──
      colors: {
        brand: {
          blue:       "var(--brand-blue)",
          "blue-dark":"var(--brand-blue-dark)",
          "blue-light":"var(--brand-blue-light)",
          navy:       "var(--brand-navy)",
        },
        background: "var(--bg)",
        surface:    "var(--surface)",
        border:     "var(--border)",
        "text-primary":   "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted":     "var(--text-muted)",
      },

      // ── Border radius scale ───────────────────────────────
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "28px",
      },

      // ── Max widths ────────────────────────────────────────
      maxWidth: {
        site: "1120px",
      },

      // ── Custom keyframes (used in globals.css too) ────────
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":       { opacity: "0.5", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.6s ease both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        float:       "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;