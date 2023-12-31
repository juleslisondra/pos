// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,

  alias: { 
    "@": resolve(__dirname, "/")
  },
  css: [
    "~/assets/main.css"],
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
