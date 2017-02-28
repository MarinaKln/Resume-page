var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    babel = require('gulp-babel'),
    react = require('gulp-react'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');


// server connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true,
        port: 8888
    });
});

//css
gulp.task('css', function () {
    gulp.src('style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style/css'));
    return gulp.src('style/css/style.css')
        .pipe(livereload());
});

//autoprefixer
gulp.task('prefix', function () {
    return gulp.src('style/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style/css'))
});

//build
gulp.task('build', function () {
    return browserify({entries: 'js/app.js', extensions: ['.js']})
        .transform('babelify', {presets: ['es2015', 'react']}, {compact: false})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('sourse'));
});

// watch
gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("style/*.scss", ["css"]);
    gulp.watch("js/**/*.js", ["build"])
});

// default
gulp.task('default', ['connect', 'watch']);
