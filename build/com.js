// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'com'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.com.conf')

var assetsPath = path.join(config.com.assetsRoot, config.com.assetsSubDirectory)


console.log(
  '  Tip:\n' +
  '  打包公用的css.\n'
)

var spinner = ora('building for production...')
spinner.start()


rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
