var gulp = require('gulp');
var browserSync = require('browser-sync')

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/**/*.html', gulp.series('html'));
    gulp.watch(['src/js/**/*.js', '!src/js/scripts.js'], gulp.series('scripts'));
    gulp.watch('src/img/svg/*.svg', gulp.series('svg'));
});