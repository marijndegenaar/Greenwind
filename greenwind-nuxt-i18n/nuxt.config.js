module.exports = {
	head: {
    title: 'Greenwind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Greenwind' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    vendor: ['vue-i18n'],
		/* ESLint */
		extend (config, ctx) {
			if (ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    // Will inject the plugin in the $root app and also in the context as `i18n`
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },
  loading: { color: '#3B8070' },
}
