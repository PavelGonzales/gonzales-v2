
export default {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0b0b0b' },
      { name: 'msapplication-TileColor', content: '#0b0b0b' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://pavelgonzales.com' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0b0b0b' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;0,900;1,700&display=swap' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    './assets/styles/main.css'
  ],
  plugins: [
    { src: '~/plugins/ScrollMagic.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-165267805-1'
      // debug: {
      //   enabled: true,
      //   sendHitTask: true
      // }
    }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
