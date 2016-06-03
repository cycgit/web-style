var gulp = require('gulp')
var sass = require('gulp-sass')
var clean = require('gulp-clean-css')
var concat = require('gulp-concat')

var SASS_PATH = 'src/sass/*.scss'
var FONTS_PATH = 'src/fonts/*'


gulp.task('sass', function(){
    gulp.src(SASS_PATH)
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});


gulp.task('default', function () {
    gulp.watch(SASS_PATH, ['sass'])
})


gulp.task('pack', function () {
    gulp.watch(SASS_PATH, function(){

    gulp.src(SASS_PATH)
      .pipe(sass())
      .pipe(clean())
      .pipe(concat('web-style.css'))
      .pipe(gulp.dest('/Users/cycok/aidaojia/tms-server/static/css'))
      // .pipe(gulp.dest('dist/css'))
    })



    gulp.src(FONTS_PATH)
        .pipe(gulp.dest('dist/fonts'))

})
