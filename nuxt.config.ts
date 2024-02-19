// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@ant-design-vue/nuxt', '@nuxtjs/tailwindcss'],
  alias: {
    '@ant-design/vue': 'node_modules/ant-design-vue/es',
  },
})
