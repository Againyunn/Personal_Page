const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  publicPath: 'http://127.0.0.1:8080/',
  outputDir: './dist/',

  chainWebpack: config => {
    config.optimization.splitChunks(false)

    config.plugin('BundleTracker').use(BundleTracker, [{filename: './webpack-stats.json'}])

    config.devServer.host('0.0.0.0').port(8080).https(false).headers({"Access-Control-Allow-Origin":["\*"]})
  },

  pages: {
    index: 'src/main.js'
  }
}

// const target = 'http://127.0.0.1:3000';

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// module.exports = {
//   chainWebpack: config => {
//     config.plugins.delete('prefetch');
//   }
// }
// module.exports = {
//     devServer:{
//         port: 8080,
//         proxy:{
//             '^/api':{
//                 target,
//                 changeOrigin: true
//             },
//             '^/upload':{
//                 target,
//                 changeOrigin: true
//             },
//             '^/download':{
//                 target,
//                 changeOrigin: true
//             }
//         }
//     }
// }