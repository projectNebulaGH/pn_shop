// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': '#00F2B8',
        'secondary': '#009BF2',
        'base-color': '#000C12',
        'base-color-alt': '#0B282D',
        'light-grey': '#EAF5F2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        sidebar: "300px auto", // for sidebar layout
        "sidebar-collapsed": "64px auto", // for collapsed sidebar layout
      },
    },
  },
  plugins: [],
}
