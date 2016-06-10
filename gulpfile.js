var gulp = require('gulp')
var sass = require('gulp-sass')
var clean = require('gulp-clean-css')
var concat = require('gulp-concat')
var autoprefixer = require('gulp-autoprefixer')

var SASS_PATH = 'src/sass/*.scss'
var FONTS_PATH = 'src/fonts/*'


gulp.task('sass', function(){
    gulp.src(SASS_PATH)
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});


gulp.task('default', function () {
    gulp.watch(SASS_PATH, ['pack'])
})


gulp.task('pack', function () {
    gulp.src(SASS_PATH)
      .pipe(sass())
      .pipe(clean())
      .pipe(concat('web-style.css'))
    //   .pipe(gulp.dest('/Users/cycok/node/tms-server/static/css'))
      .pipe(gulp.dest('dist/css'))


})
