var gulp        = require('gulp');

gulp.task('build', function(cb) {
	gulp.series(
		'clean',
		'fonts:copy',
		'html:copy',
		'img:copy',
		'scripts:copy',
        'css:copy'
	)(cb)
});