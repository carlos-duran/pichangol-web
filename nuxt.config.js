const isProd = process.env.NODE_ENV === 'production'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Pichangol',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Reserva de canchas' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/ball-marker.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/main.postcss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/mapbox.client.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'tailwindcss': './tailwind.config.js',
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js'
          ],
          whitelist: ['body', 'html', 'nuxt-progress'],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
      order: () => [
        'postcss-import',
        'postcss-url',
        'tailwindcss',
        'postcss-nested-ancestors',
        'postcss-nested',
        'postcss-preset-env',
        isProd && '@fullhuman/postcss-purgecss',
        'cssnano'
      ].filter(_ => _)
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
