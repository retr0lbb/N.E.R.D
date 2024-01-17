/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'primary': '#8E0DBE',
        'secondary': '#390FA6',
      }),
      backdropBlur: {
        'sm': '4px',  // Pequena intensidade de desfoque
        'md': '8px',  // Média intensidade de desfoque
        'lg': '12px', // Grande intensidade de desfoque
      },
      colors: {
        text_color: "#FAFAFA",
        header_color_1: "#48317A",
        header_color_2: "#131636",
        navMenu: "#564895",
        navMenu2: "#3914B1"
      }
    },
  },
  plugins: [],
}

