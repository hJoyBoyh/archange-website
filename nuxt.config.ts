// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@hypernym/nuxt-gsap'],
  imports:{
    dirs:['store','animations']
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/archange-icon.png' }]
    },
  },
})