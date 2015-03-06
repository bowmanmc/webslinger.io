
var gulp =  require('gulp'),
    path = require('path'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    wiredep = require('wiredep').stream;

// Task Definitions
gulp.task('default', ['develop']);

gulp.task('develop', ['bower', 'jekyll', 'browser-sync'], function() {
    // Any changes in the app directory, run jekyll and reload the browser
    gulp.watch('app/**/*', ['jekyll']);
    gulp.watch('build/index.html', ['usemin']);
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

gulp.task('usemin', function() {
    //gulp.src(['build/**/*.html', 'build/*.html'])
    /*
        .pipe(plugins.debug())
        .pipe(plugins.usemin({
            'path': 'build',
            'css': ['concat', plugins.minifyCss()]
        }))
        .pipe(gulp.dest('build'))
        ;//.pipe(browserSync.reload());
    */
    gulp.src('build/**/*.html')
        .pipe(plugins.tap(function(file, t) {
            var outDir = path.dirname(file.path);
            gulp.src(file.path)
                .pipe(plugins.debug())
                .pipe(plugins.usemin({
                    'path': 'build',
                    'css': ['concat', plugins.minifyCss()]
                }))
                .pipe(gulp.dest(outDir));
        }));
});

gulp.task('jekyll', function() {
    var cmd = new plugins.run.Command('jekyll build --source app --destination build');
    cmd.exec(function() {
        console.log('JEKYLL BUILD FINISHED!');
    });
});

gulp.task('bower', function () {
    var src = ['app/_includes/head.html', 'app/_includes/footer.html'];
    console.log('Running bower wiredep on: ' + JSON.stringify(src));
    gulp.src(src)
        .pipe(wiredep({
            src: src,
            ignorePath: '..'
        }))
        .pipe(gulp.dest('app/_includes'));
});
