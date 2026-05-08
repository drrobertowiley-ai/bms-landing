import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === BMS brand tokens ===
        bms: {
          blue: {
            900: "#1E3A8A",
            700: "#1D4ED8",
            600: "#2563EB",
            500: "#3B82F6",
            400: "#60A5FA",
            100: "#DBEAFE",
            50: "#EFF6FF",
          },
          slate: {
            900: "#0F172A",
            700: "#334155",
            600: "#475569",
            500: "#64748B",
            400: "#94A3B8",
            300: "#CBD5E1",
            200: "#E2E8F0",
            100: "#F1F5F9",
            50: "#F8FAFC",
          },
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#2563EB",
        },
      },
      backgroundImage: {
        "bms-gradient": "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
        "bms-gradient-soft":
          "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)",
      },
      fontFamily: {
        "bms-sans": [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        "bms-mono": [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "monospace",
        ],
      },
      letterSpacing: {
        "bms-wordmark": "-0.05em",
        "bms-tagline": "0.18em",
      },
      borderRadius: {
        "bms-sm": "6px",
        "bms-md": "10px",
        "bms-lg": "16px",
        "bms-xl": "24px",
      },
      boxShadow: {
        "bms-sm": "0 1px 2px 0 rgb(15 23 42 / 0.05)",
        "bms-md": "0 4px 12px -2px rgb(15 23 42 / 0.08)",
        "bms-lg": "0 12px 32px -8px rgb(15 23 42 / 0.12)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
