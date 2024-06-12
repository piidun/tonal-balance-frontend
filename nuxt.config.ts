export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
    runtimeConfig: {
      // The private keys which are only available within server-side
      apiSecret: '123',
      // Keys within public, will be also exposed to the client-side
      public: {
        apiBase: '/api'
      }
    },
})
