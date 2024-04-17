// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: [{src: '~/plugins/google-recaptcha.ts'}],
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-03V4X9JQ5E',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        },
      ]
    }
  }
})