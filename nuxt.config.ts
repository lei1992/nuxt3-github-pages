// https://nuxt.com/docs/api/configuration/nuxt-config
// const path = require('path');
export default defineNuxtConfig({
  devtools: { enabled: true },
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, 'docs')
  //   }
  // }
  app: {
    baseURL: '/nuxt3-github-pages/',
    buildAssetsDir: 'nuxt_assets',
  },
  experimental: {
    payloadExtraction: false
  },
})
