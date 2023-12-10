// https://nuxt.com/docs/api/configuration/nuxt-config
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
        },
      ],
    },
  },
  css: ["~/assets/main.scss", "~/assets/Geist/fonts.css"],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'min-dark',
        // Theme used if `html.dark`
        dark: 'min-dark'
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  modules: ["@nuxtjs/supabase", "@pinia/nuxt", "nuxt-lodash", '@nuxtjs/color-mode', '@nuxt/content'],
  colorMode: {
    classSuffix: ''
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_API_KEY,
    //   redirect: {
    //     login: "/",
    //     callback: "/profile",
    //   },
  },
  runtimeConfig: {
    public: {
      SUPABASE_SECRET: process.env.SUPABASE_SECRET,
      SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    },
  },
});
