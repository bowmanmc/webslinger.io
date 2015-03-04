
var gulp =  require('gulp'),
    bower = require('main-bower-files'),
    browserSync = require('browser-sync'),
    del = require('del'),
    runSequence = require('run-sequence'),
    run = require('gulp-run'),
    stream = require('event-stream'),
    watch = require('gulp-watch')
    wiredep = require('wiredep').stream;

// Task Definitions
gulp.task('default', ['develop']);

gulp.task('develop', ['bower', 'jekyll', 'browser-sync'], function() {
    // Any changes in the app directory, run jekyll and reload the browser
    gulp.watch('app/**/*', ['jekyll']);
    gulp.watch('bower.json', ['bower']);
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

gulp.task('bower', function () {
    var src = ['app/_includes/head.html', 'app/_includes/footer.html'];
    console.log('Running bower wiredep on: ' + JSON.stringify(src));
    gulp.src(src)
        .pipe(wiredep({
            src: src,
            ignorePath: '../'
        }))
        .pipe(gulp.dest('app/_includes'));
});
