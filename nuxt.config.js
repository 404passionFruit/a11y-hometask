export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'a11y-hometask',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/global.scss'],

  // Prepended Scss
  styleResources: {
    scss: ['@/assets/scss/prepended.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],

  // i18n https://i18n.nuxtjs.org/setup
  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru',
        name: 'RU',
        file: 'ru/ru.js',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'EN',
        file: 'en/en.js',
      },
    ],
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      fallbackLocale: 'ru',
      alwaysRedirect: false,
      onlyOnRoot: true,
      useCookie: true,
    },
    vueI18n: {
      fallbackLocale: 'ru',
    },
    vuex: {
      syncLocale: false,
    },
    lazy: true,
    langDir: 'locales/',
    seo: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
