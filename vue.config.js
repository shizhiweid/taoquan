module.exports = {
	publicPath: './',
	devServer: {
		proxy: {
			'/api': {
				target: 'http://47.98.124.41:8889',
				changeOrigin: true,
				logLeve: 'debug',
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	}
}