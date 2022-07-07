module.exports = {
  publicPath: '/demo',
  devServer: {
    host: 'local.auto-pai.cn',
    open: true,
    port: 10010,
    overlay: {
      errors: true,
      warnings: true
    }

  }
}