import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  alias: {
    "@": "/<srcDir>",
  },
  app: {
    head: {
      script: [
        {
          defer: true,
          "data-domain": "codewithg.com",
          crossorigin: "anonymous",
          src: "https://plausible.io/js/script.js",
        }, {
          defer: true,
          async: true,
          src:"https://platform.twitter.com/widgets.js"
        }
      ],
    },
  },
  css: ["~/assets/main.scss", "~/assets/Hellix/fonts.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  modules: ["nuxt-icon", "@nuxt/image"],
});