var gulp = require('gulp');
var compass = require('gulp-compass');
//var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');


var path = './css';

gulp.task('sass', function () {
    gulp.src(path + '/**/*.scss')
        .pipe(compass({
            config_file: './config/config.rb'
            , css: path
            , sass: path
        }))
        .pipe(prefix("last 5 version","ie 8", "ie 7"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path));
});

gulp.task('sass:watch', function () {
    gulp.watch(path + '/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);