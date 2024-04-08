// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
  ],
  image: {
    provider: 'netlify',
    domains: ['https://sparkly-chaja-627a17.netlify.app/']
  }
})