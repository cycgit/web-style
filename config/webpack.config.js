var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: './dist',
    filename: "./js/web-style.js"
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css!sass")
    },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: {
    autoprefixer: {
      browsers: ['android >= 4.2']
    },
    loaders: {
      scss: ExtractTextPlugin.extract("css!sass")
      // css: ExtractTextPlugin.extract("css")
    }
  },
  plugins: [
    new ExtractTextPlugin("./css/web-style.css")
  ]
};
