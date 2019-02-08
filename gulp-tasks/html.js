var gulp = require('gulp');
// var typograf = require('gulp-typograf'); // https://github.com/typograf/typograf
// var run = require('gulp-run'); // in blacklist
var browserSync = require('browser-sync')

// gulp.task('typograf', function() {
//     gulp.src('src/*.html')
//             // .pipe(typograf({
//             // locale: ['ru', 'en-US'],
//             // htmlEntity: {type: 'name'}
//             // safeTags: [
//             //     ['<\\?php', '\\?>']
//             // ]
//             // }))
//         .pipe(gulp.dest('dist'));
// });
//Если нужно проверить на ошибки
// gulp.task('yaspeller', function (cb) {
//     return run('npm run yaspeller').exec()
// });

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html:copy', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});