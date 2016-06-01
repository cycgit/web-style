var gulp = require('gulp')
var sass = require('gulp-sass')
var clean = require('gulp-clean-css')
var concat = require('gulp-concat');

var SASS_PATH = 'src/style/*.scss'


gulp.task('sass', function(){
    gulp.src(SASS_PATH)
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});


gulp.task('default', function () {
    gulp.watch(SASS_PATH, ['sass'])
})

gulp.task('publish', function () {
    gulp.src(SASS_PATH)
        .pipe(sass())
        .pipe(clean())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'));
})
