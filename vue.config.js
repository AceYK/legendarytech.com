module.exports = {
  publicPath: process.env.BASE_URL || '/',
  pages: {
    index: {
      entry: './src/index.js',
      template: './src/index.pug'
    }
  },
  devServer: {
    port: process.env.VUE_APP_DEV_SERVER_PORT || 8081,
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_DEV_SERVER_PROXY || `http://localhost:${process.env.APP_PORT || 3000}`,
        ws: true,
        changeOrigin: true
      }
    }
  }
}
