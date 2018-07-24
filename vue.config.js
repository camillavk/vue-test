module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, { name: 'img/[name].[ext]' }));
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].min.js',
      chunkFilename: 'js/[name].min.js',
    },
  },
  outputDir: undefined,
  productionSourceMap: false,

  css: {
    extract: false,
    modules: true
  },

  baseUrl: 'vue-test-2398/',
  assetsDir: 'assets',
  runtimeCompiler: true,
  parallel: false,

  pluginOptions: {
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'vue-test-2398',
      region: 'eu-west-2',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5
    }
  }
}
