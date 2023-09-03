/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
            '50': '#eafff4',
            '100': '#cdfee4',
            '200': '#a0facf',
            '300': '#63f2b5',
            '400': '#25e298',
            '500': '#00c981',
            '600': '#00a46a',
            '700': '#008358',
            '800': '#006747',
            '900': '#00553c',
            '950': '#003023',
        },
        secondary: {
          '500': "#728077"
        }
      }
    },
  },
  plugins: [],
}
