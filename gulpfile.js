var gulp = require('gulp')
var sass = require('gulp-sass')
var clean = require('gulp-clean-css')
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer')


var SASS_PATH = ['src/sass/*.scss', 'src/sass/components/*.scss']

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'ios >= 7',
  'android >= 4.4',
]


gulp.task('default', ['sass','watch'])



gulp.task('sass', function () {
  gulp.src('src/sass/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(clean())
    .pipe(rename('web-style.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function () {
  gulp.watch(SASS_PATH, ['sass'])
})
