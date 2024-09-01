export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:1337/api',
    },
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL
  },
  modules: ['@pinia/nuxt', "vue3-carousel-nuxt"],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  components: true,
});