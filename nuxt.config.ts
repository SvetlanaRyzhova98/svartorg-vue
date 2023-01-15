// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        MAILHOST: process.env.MAILHOST,
        MAILPORT: process.env.MAILPORT,
        MAILUSER: process.env.MAILUSER,
        MAILPASSWORD: process.env.MAILPASSWORD,
        CONTACTMAIL: process.env.CONTACTMAIL
    },
    modules: [
        // pinia plugin
        '@pinia/nuxt',
      ],
      css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
      ]
})