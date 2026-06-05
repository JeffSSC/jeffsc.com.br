import tokens from "./src/data/tokens.json";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        card: "var(--card)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        serif: tokens.fonts.serif,
        sans: tokens.fonts.sans,
        mono: tokens.fonts.mono,
      },
      maxWidth: {
        content: tokens.layout.maxWidth.content,
      },
    },
  },
  plugins: [],
};
