const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: "babel-loader"
        } 
     }]
},
  plugins: [
    new BrowserSyncPlugin({
      proxy: "http://localhost:3000/",
      https: "TRUE",
      files: [
        '**/*.css',
        '**/*.html',
      ],
    }),
]
};