export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Masjid Raya Al Jabbar',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-lazy-load',
    '~/plugins/vue-touch-events',
    '~/plugins/swiper',
    '~/plugins/jabar-design-system.js',
    '~/plugins/vue-gtag.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'portal-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_API_URL
    },
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@jabardigitalservice/jds-design-system',
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
