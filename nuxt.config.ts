// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  app: {
    head:{
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/Fish2.ico' }
        ],
    }
  },
  colorMode: {
    preference: 'dark'
  },
  googleFonts: {
    families: {
      Poppins: true,
    }
  }
})
