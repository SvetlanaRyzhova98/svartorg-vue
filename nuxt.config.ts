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
        script: [
            {
                hid: 'yandex-metrika',
                children: `(function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(99172841, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });`,
      type: 'text/javascript',
            }
        ]
      },
    },
    
  });
 