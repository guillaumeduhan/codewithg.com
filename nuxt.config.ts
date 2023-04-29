// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "/<srcDir>",
  },
  app: {
    head: {
      script: [
        { src: "https://player.vimeo.com/api/player.js" },
        {
          src: "https://plausible.io/js/script.js",
          defer: true,
          "data-domain": "codewithguillaume.com",
        },
      ],
    },
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/supabase", "@pinia/nuxt"],
  supabase: {
    url: "https://jpbegoqdzfcsctsvohia.supabase.co",
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
