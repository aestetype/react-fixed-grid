module.exports = {
  entry: './examples/basic.js',
  output: {
    filename: 'examples/app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
};
