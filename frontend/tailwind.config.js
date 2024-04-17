/** @type {import('tailwindcss').Config} */
module.exports = {
  keyframes: {
    typewriter: {
      from: { width: '0' },
      to: { width: '100%' },
    },
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
          "red":"#EE1515",
          "white": "#ffffff"
      },
      fontFamily:{
        futura:["futura", "sans-serif"]
      }
    },
  },
  plugins: [],
}

