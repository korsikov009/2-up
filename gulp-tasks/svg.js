var gulp = require('gulp')
var svgmin = require('gulp-svgmin')
var svgSprite = require('gulp-svg-sprite')
var cheerio = require('gulp-cheerio')
var replace = require('gulp-replace');


gulp.task('svg', function () {
    return gulp.src('src/img/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('src/img/svg/'))
        .pipe(browserSync.reload({stream: true}))
});

