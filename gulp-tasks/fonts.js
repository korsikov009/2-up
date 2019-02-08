var gulp = require('gulp');
// var cssfont64 = require('gulp-cssfont64');
var ttf2woff2 = require('gulp-ttf2woff2');
var ttf2woff = require('gulp-ttf2woff');

gulp.task('ttf2woff', function(){
    return gulp.src(['src/fonts/*.ttf'])
        .pipe(ttf2woff())
        .pipe(gulp.dest('src/fonts/fontsWoff'));
});

gulp.task('ttf2woff2', function(){
    return gulp.src(['src/fonts/*.ttf'])
        .pipe(ttf2woff2())
        .pipe(gulp.dest('dist/fonts/fontsWoff'));
});

// gulp.task('fonts', function () {
//     return gulp.src('src/fonts/fontsWoff/*.{woff,woff2}')
//         .pipe(cssfont64())
//         .pipe(gulp.dest('dist/css/fonts'));
// });

gulp.task('fonts:copy', function () {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
});