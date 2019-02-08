var gulp = require('gulp');

gulp.task('default', function (cb) {
    gulp.series(
        'ttf2woff',
        'ttf2woff2',
        'scripts',
        'sass'
    )
    (cb);
    gulp.parallel('watch','server')(cb)
});
