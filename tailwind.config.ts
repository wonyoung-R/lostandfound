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
        // LOST and FOUND 브랜드 컬러 시스템 (무채색 도심 팔레트)
        laf: {
          black: "#0A0A0A",
          void: "#111111",
          charcoal: "#1A1A1A",
          asphalt: "#242424",
          concrete: "#2E2E2E",
          steel: "#3D3D3D",
          iron: "#4F4F4F",
          zinc: "#6B6B6B",
          slate: "#8A8A8A",
          ash: "#ABABAB",
          silver: "#C4C4C4",
          mist: "#D8D8D5",
          fog: "#E5E3E0",
          smoke: "#EDECEA",
          offwhite: "#F2F0EC",
          white: "#FAFAF8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "11xl": ["12rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "12xl": ["14rem", { lineHeight: "0.9", letterSpacing: "-0.05em" }],
      },
      letterSpacing: {
        widest: "0.3em",
        superwide: "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        marquee: "marquee 20s linear infinite",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "concrete-texture":
          "radial-gradient(ellipse at 20% 50%, #2a2a2a 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #1a1a1a 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #222 0%, transparent 50%)",
        "noise-overlay":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
