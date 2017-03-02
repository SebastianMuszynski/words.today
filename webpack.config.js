var path = require('path')

module.exports = {
  entry: './js/ClientApp.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
