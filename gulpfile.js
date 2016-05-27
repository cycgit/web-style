var gulp = require('gulp')
var sass = require('gulp-sass')



var SASS_PATH = 'src/style/*.scss'


gulp.task('sass', function(){


    gulp.src(SASS_PATH)
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});


gulp.task('default', function () {
    gulp.watch(SASS_PATH, ['sass'])
})
