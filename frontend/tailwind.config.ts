import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#003eff",
        "primary-content": "#ffffff",
        "primary-dark": "#0032cc",
        "primary-light": "#3365ff",

        secondary: "#ffc100",
        "secondary-content": "#000000",
        "secondary-dark": "#cc9a00",
        "secondary-light": "#ffcd33",

        "dark-background": "#111522",
        "dark-foreground": "#191f34",
        "dark-border": "#293456",

        background: "#eaedf5",
        foreground: "#fafafd",
        border: "#d4d9ea",

        copy: "#191f34",
        "copy-light": "#42548a",
        "copy-lighter": "#6478b4",

        "dark-copy": "#fafafd",
        "dark-copy-light": "#cbd2e6",
        "dark-copy-lighter": "#8796c5",

        success: "#00ff00",
        warning: "#ffff00",
        error: "#ff0000",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#ffffff",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
