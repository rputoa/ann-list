// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var gutil = require('gulp-util');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return sass('app/resources/scss/')
        .pipe(gulp.dest('app/resources/css'))
        .pipe(connect.reload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    gulp.src(['./app/src/**/*.html', './app/src/*.html', './app/*.html'])
        .pipe(connect.reload())
        .on('error', gutil.log);
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/src/**/*.js', ['lint']);
    gulp.watch('app/resources/scss/*.scss', ['sass']);
    gulp.watch('app/src/**/*.html', ['html']);

});

// Using webserver
gulp.task('serve', function() {
    connect.server({
        root : 'app',
        port : 8000,
        livereload : true,
        open : {
            browser : 'chrome'
        }
    });
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('start', ['lint','sass', 'serve', 'watch']);