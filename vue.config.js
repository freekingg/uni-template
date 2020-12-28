/*
 * 关于uni-app使用vue.config.js配置文件的特殊说明：
 *      1、同时支持manifest.json或vue.config.js配置跨域和其他信息【具体参考uni-app的官方文档】
 *      2、优先级 => manifest.json的配置优先,会强制覆盖vue.config.js
 */
console.log('config')
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap(args => {
      const compress = args[0].terserOptions.compress
      // 非 App 平台移除 console 代码
      compress.drop_console = true
      compress.pure_funcs = [
        '__f__', // App 平台 vue 移除日志代码
      ]
      return args
    })
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
