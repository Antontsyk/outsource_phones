var gulp = require('gulp');
var compass = require('gulp-compass');
//var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var size = require('gulp-size');
//var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var clean = require('gulp-clean');

var path = './css';

var path_app_js = './js';
var path_dist_js = './js_min';

gulp.task('lint', function () {
    return gulp.src(path_app_js + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
    return gulp.src(path_app_js + '/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(path_dist_js))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path_dist_js));
});

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

gulp.task('project:watch', function () {
    gulp.watch(path + '/**/*.scss', ['sass']);
    gulp.watch(path_app_js + '/**/*.js', ['lint', 'scripts']);
});

gulp.task('default', ['project:watch'], function() {
    gulp.start('sass', 'scripts');
});