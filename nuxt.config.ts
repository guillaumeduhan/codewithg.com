import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-svgo",
    "nuxt-security"
  ],
  alias: {
    "@": "/<srcDir>",
    "lib": "/lib"
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
          src: "https://platform.twitter.com/widgets.js"
        }
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
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui'
  },
  security: {
    allowedMethodsRestricter: {
      methods: ['GET']
    }
  }
});