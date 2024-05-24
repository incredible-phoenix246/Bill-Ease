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
        slideDown: {
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideNavUp: {
          "100%": {
            transform: "translateY(-112px)",
            opacity: "0",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
        rotate3d: {
          "0%": {
            transform: "rotateY(0)",
          },
          "50%": { opacity: "0.5" },

          "100%": {
            transform: "rotateY(360deg)",
          },
        },
        pulsing: {
          "50%": {
            opacity: "0.2",
          },
        },
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite",
        slideUp: "slideUp 1s 0.2s ease forwards",
        loadspin: "loadspin 1.2s linear infinite",
        pulsing: "pulsing 1.5s ease infinite",
        rotate3d:
          "rotate3d 2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        slideDown: "slideDown 1s 0.2s ease forwards",
        slideNavUp: "slideDown 1s 0.2s ease forwards",
      },
      fontFamily: {
        montserrat: [`var(--font-montserrat)`, "sans-serif"],
        nunito: [`var(--font-nunito)`, "sans-serif"],
        worksans: [`var(--font-work-sans)`, "sans-serif"],
        manrope: [`var(--font-manrope)`, "sans-serif"],
        opensans: [`var(--font-open-sans)`, "sans-serif"],
        poppins: [`var(--font-poppins)`, "sans-serif"],
        radioCanada: [`var(--font-radio-canada)`, "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
