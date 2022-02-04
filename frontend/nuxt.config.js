export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'teklick',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate.min.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/style.scss',
    '~/assets/css/responsive.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toasted', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  '@nuxtjs/apollo',
  '@nuxtjs/strapi',
  '@nuxtjs/axios',
  '@nuxtjs/proxy'

],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
      }
    },
  },
  strapi: {
     entities: ['blogs',],
      url: 'http://localhost:1337',
      prefix: '/api',
      version: 'v4',
      cookie: {},


  },
  axios: {
    // proxy: true
  },
  proxy: {
    '/graphql': 'http://localhost:1337/graphql',


  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // router: {
  //   routes: [
  //     {
  //       path: '/blog/:id',
  //       component: 'pages/blog/index.vue',
  //       name: 'index'
  //     },
  //   ]
  // }
}
