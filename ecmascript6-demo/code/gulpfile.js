var gulp = require('gulp');
var gutil = require('gulp-util');
var traceur = require('gulp-traceur');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var rimraf = require('gulp-rimraf');

var paths = {
    src: ['./src/**/*.js'],
    dist: './dist'
};

// Define the traceur compile task to transiple our ECAMScript 6
gulp.task('traceur-compile', function () {
    return gulp.src(paths.src)
        .pipe(traceur({
            sourceMap: false,
            experimental: true,
            modules: 'amd'
        }))
        .pipe(gulp.dest(paths.dist))
        .on('error', gutil.log);
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.src, ['traceur-compile'])
        .on('error', gutil.log);
});

// Lint me, I need it!
gulp.task('lint', function () {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', gutil.log);
});

// Clean dist files each time
gulp.task('cleanDistFolder', function() {
    return gulp.src(paths.dist + '/**/*.js', { read: false }) // much faster
        .pipe(rimraf())
        .on('error', gutil.log);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'cleanDistFolder', 'lint', 'traceur-compile']);