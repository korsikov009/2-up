var gulp 			= require('gulp');
var browserSync 	= require('browser-sync');

// Static server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: 'src/'
        },
        notify: false, // Отключаем уведомления
        // files: ['src/*.html', 'src/css/*', 'src/js/*', 'src/img/*', 'src/scss*' ]
    });
});