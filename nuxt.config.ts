export default defineNuxtConfig({
    runtimeConfig: {
      public: {
        baseURL: process.env.BASE_URL || 'https://galaktika-svarki.ru/api',
      },
      MAILHOST: process.env.MAILHOST,
      MAILPORT: process.env.MAILPORT,
      MAILUSER: process.env.MAILUSER,
      MAILPASSWORD: process.env.MAILPASSWORD,
      CONTACTMAIL: process.env.CONTACTMAIL,
    },
    modules: ['@pinia/nuxt', 'vue3-carousel-nuxt'],
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],
    components: true,
    nitro: {
      preset: 'node-server', // Используется для SSR и маршрутизации
      routeRules: {
        '/**': { ssr: true }, // Включает SSR для всех маршрутов
      },
    },
    app: {
      head: {
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      },
    },
    
  });
 