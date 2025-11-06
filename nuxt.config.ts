// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/main.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
});
