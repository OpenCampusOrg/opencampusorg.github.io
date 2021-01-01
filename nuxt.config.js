export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Rejoins le nouveau hackerspace' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google', content: 'notranslate' },
      { httpEquiv: 'Content-Language', content: 'en' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'shrink-to-fit=no' }
    ],
    htmlAttrs: [
      { lang: 'en' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/three.r119.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '@fortawesome/fontawesome-svg-core/styles.css', lang: 'css' },
    { src: 'mdbootstrap/css/addons/flag.min.css', lang: 'css' }
  ],
  /*
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/fontawesome.js' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'mdbvue/nuxt',
    '@nuxtjs/pwa'
  ],
  babel: {
    presets (env, [preset, options]) {
      return [
        ['@nuxt/babel-preset-app', options]
      ]
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
