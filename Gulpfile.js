
var gulp =  require('gulp'),
    bower = require('main-bower-files'),
    browserSync = require('browser-sync'),
    del = require('del'),
    runSequence = require('run-sequence'),
    run = require('gulp-run'),
    stream = require('event-stream'),
    watch = require('gulp-watch');

// Task Definitions
gulp.task('default', ['develop']);

gulp.task('develop', ['jekyll', 'browser-sync'], function() {
    // Any changes in the app directory, run jekyll and reload the browser
    gulp.watch('app/**/*', function() {
        runSequence('jekyll');
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 9000,
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('jekyll', function() {
    var cmd = new run.Command('jekyll build --source app --destination build');
    cmd.exec(function() {
        browserSync.reload();
    });
});
