const TransformPages = require('uni-read-pages')

const { webpack } = new TransformPages()
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap(args => {
      const {compress} = args[0].terserOptions
      // 非 App 平台移除 console 代码
      compress.drop_console = true
      compress.pure_funcs = [
        '__f__', // App 平台 vue 移除日志代码
      ]
      return args
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'aliasPath'],
          })
          return JSON.stringify(tfPages.routes)
        }, true),
      }),
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
      },
    },
    https: false,
  },
}
