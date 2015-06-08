var gulp = require('gulp');
var brwsrfy = require('browserify');
var source = require('vinyl-source-stream');
var mocha = require('gulp-mocha');
 
gulp.task('browserify', function() {
    return brwsrfy('./src/main.js', {standalone: 'lispish'})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});

gulp.task('test', function () {
    return gulp.src('./tests/tests.js', {read: false})
        .pipe(mocha({reporter: 'min', ui: 'tdd'}));
});

gulp.task('test-watch', function() {
  gulp.watch(['./src/**/*.js', './tests/**/*.js'], ['test']);
});

gulp.task('browserify-watch', function() {
  gulp.watch(['./src/**/*.js'], ['browserify']);
});

gulp.task('default', ['browserify-watch']);