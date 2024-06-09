export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    proxy: {
      '/api/': { target: 'http://localhost:5179', pathRewrite: { '^/api/': '' } },
    },
  },
})
