// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "/<srcDir>",
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
});
