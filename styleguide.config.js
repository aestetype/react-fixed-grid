const path = require('path');

module.exports = {
  title: 'react-fixed-grid',
  components: './src/**/*.js',
  updateWebpackConfig(webpackConfig) {
    const dir = path.join(__dirname, 'src');
    webpackConfig.module.loaders.push({
      test: /\.jsx?$/,
      include: dir,
      loader: 'babel',
    });
    return webpackConfig;
  },
};
