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
          '50': '#effef4',
          '100': '#dbfde8',
          '200': '#b8fad0',
          '300': '#81f4ad',
          '400': '#43e581',
          '500': '#22e26c',
          '600': '#10a94b',
          '700': '#10853e',
          '800': '#136834',
          '900': '#11562d',
        },
        secondary: {
          '500': "#728077"
        }
      }
    },
  },
  plugins: [],
}
