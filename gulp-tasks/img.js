var gulp = require('gulp');
// var tinypng = require('gulp-tinypng-compress');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant')

gulp.task('img:copy', function () {
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});


// gulp.task('tinypng', function () {
//     gulp.src('src/img/**/*.{png,jpg,jpeg}')
//         .pipe(tinypng('UcE5ePeSswSWEouT520TJ3fv5x3nr5EE'))
//         .pipe(gulp.dest('dist/img'));
// });