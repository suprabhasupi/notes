const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: '[name]-bundle.js',
    publicPath: '/build'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/, exclude: [/node_modules/], use: [{loader: 'babel-loader'}]
    }, {
      test: /\.vue$/, use: [{loader: 'vue-loader'}]
    }, {
      test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/, use: [{loader: 'file-loader'}]
    }, {
      test: /\.scss$/, use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': '"development"'
    })
  ],
  devServer: {
    contentBase: 'public',
    hot: true,
    stats: {
      chunks: false
    }
  }
};

