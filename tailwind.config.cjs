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
        },
        'blue-next': {
          '50': '#e7efff',
          '100': '#d3e2ff',
          '200': '#b0c7ff',
          '300': '#81a2ff',
          '400': '#4f6cff',
          '500': '#2836ff',
          '600': '#0904ff',
          '700': '#0400ff',
          '800': '#0400e9',
          '900': '#0b0ca4',
          '950': '#01002F',
        },
      }
    },
  },
  plugins: [],
}
