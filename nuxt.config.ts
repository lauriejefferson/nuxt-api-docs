// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    documentDriven: true
  },
  css: ['~/assets/css/styles.css']
})