import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#050505",
          900: "#0b0b0c",
          850: "#111113",
          800: "#171719",
        },
        lab: {
          amber: "#f59e0b",
          amberSoft: "#fbbf24",
          green: "#22c55e",
          cyan: "#38bdf8",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        "amber-glow": "0 0 0 1px rgba(245, 158, 11, 0.14), 0 18px 60px rgba(245, 158, 11, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
