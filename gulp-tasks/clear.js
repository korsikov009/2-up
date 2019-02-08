var cache = require('gulp-cache');
var gulp = require('gulp');

gulp.task('clear', function () {
    return cache.clearAll();
})