/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "white": "#fffcfb",
      "gray": "#4367bf",
      "blue": "#1c5775",
      "gold": "#282828",
    },
    extend: {
      animation: {
        'spin-slow': 'transform 3s linear',
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}


