module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: './build',
    filename: "web-style.js"
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
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: {
    autoprefixer: {
      browsers: ['android >= 4.2']
    }
  }
};
