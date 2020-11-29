const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../docs'),
  publicPath: '/vue-use-local-storage/',
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue', path.join(__dirname, '../node_modules/vue'));
    config.resolve.alias.set(
      "vue-use-local-storage",
      path.resolve(__dirname, "../src/main")
    );
  }
};