const express = require('express')
const app = express()

const PORT = process.env.PORT
const ENABLE_BUILD = process.env.ENABLE_BUILD



module.exports = [{
  entry: __dirname + '/src/js/controller/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'pack.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js.*/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0'],
              plugins: ['inferno']
            }
          }
        ]
      },
      {
        test: /\.css?/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  }
}]


// server
if (PORT) {
  app.use(express.static(__dirname))
  app.listen(PORT)
}
