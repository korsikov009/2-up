var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync')


gulp.task('scripts', function () {
    return gulp.src(['src/js/**/*.js', '!src/js/scripts.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts:copy', function () {
    return gulp.src(['src/js/scripts.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});