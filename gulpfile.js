const gulp = require('gulp')
const sass = require('gulp-sass')
const clean = require('gulp-clean-css')
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')


const SASS_PATH = ['src/sass/*.scss', 'src/sass/components/*.scss']
const JS_PATH = ['src/js/*.js']

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'ios >= 7',
  'android >= 4.4'
]


gulp.task('default', ['sass', 'js', 'watch'])


gulp.task('sass', function () {
  gulp.src('src/sass/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(clean())
    .pipe(rename('web-style.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function () {
  gulp.src(JS_PATH)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat('web-style.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('watch', function () {
  gulp.watch(SASS_PATH, ['sass'])
  gulp.watch(JS_PATH, ['js'])
})
