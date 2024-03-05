const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    NERD: {

    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "close-top": {
          "0%": {
            transform: "rotate(0deg)",
            position: "relative"
          },
          "100%": {
            transform: "rotate(45deg)",
            position: "absolute",
          }
        },
        "close-bottom": {
          "0%": {
            transform: "rotate(0deg)",
            position: "relative"
          },
          "100%": {
            transform: "rotate(-45deg)", 
            position: "absolute",
          }
        },
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
        "close-top": "close-top .3s ease-in-out forwards ",
        "close-bottom": "close-bottom .3s ease-in-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), nextui(),],
}