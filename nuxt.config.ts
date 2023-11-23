// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "/<srcDir>",
  },
  app: {
    head: {
      script: [
        { src: "https://tally.so/widgets/embed.js" },
        { src: "https://player.vimeo.com/api/player.js" },
        {
          defer: true,
          "data-domain": "codewithguillaume.com",
          crossorigin: "anonymous",
          src: "https://plausible.io/js/script.js",
        },
      ],
    },
  },
  css: ["~/assets/main.scss", "~/assets/Geist/fonts.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  modules: ["@nuxtjs/supabase", "@pinia/nuxt", "nuxt-lodash"],
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
