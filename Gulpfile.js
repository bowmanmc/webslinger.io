// Generated on 2015-03-07 using generator-jekyllrb-gulp 0.1.1
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var cp          = require('child_process');
var debug       = require('gulp-debug');
var fs          = require('fs');
var imagemin    = require('gulp-imagemin');
var minifyCSS   = require('gulp-minify-css');
var moment      = require('moment');
var os          = require("os");
var pkg         = require('./package.json');
var prefix      = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var rimraf      = require('rimraf');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var uncss       = require('gulp-uncss');
var wiredep     = require('wiredep').stream;

var GH_PAGES_BRANCH = '/tmp/webslinger.io';

gulp.task('default', ['develop']);
gulp.task('develop', ['browser-sync', 'watch']);
gulp.task('build', ['sass', 'vendor']);

gulp.task('dist', ['build', 'jekyll-build', 'clean-dist'], function() {
    console.log('Publishing to: ' + GH_PAGES_BRANCH);
    gulp.src('build/**/*')
        .pipe(gulp.dest(GH_PAGES_BRANCH));
    var ver = GH_PAGES_BRANCH + '/version.txt';
    var now = moment();

    fs.appendFileSync(ver, '\nWebSlinger.io');
    fs.appendFileSync(ver, '\n=============');
    fs.appendFileSync(ver, '\nVersion: ' + pkg.version);
    fs.appendFileSync(ver, '\nBuild Time: ' + now.format('YYYY-MM-DD HH:mm:ss'));
    fs.appendFileSync(ver, '\nBuild Host: ' + os.hostname() + ' [' + os.platform() + ']');
    fs.appendFileSync(ver, '\n');
    fs.appendFileSync(ver, '\n');
});

gulp.task('clean-dist', function (done) {
    console.log('Cleaning dist: ' + GH_PAGES_BRANCH);
    // return cp.spawn(
    //         'rm',
    //         ['-rf', GH_PAGES_BRANCH + '/*'],
    //         { stdio: 'inherit' }
    //     ).on('close', done);
    rimraf(GH_PAGES_BRANCH + '/*', done);
});

gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.scss', ['sass']);
    gulp.watch([
        'app/index.html',
        'app/_layouts/*.html',
        'app/_includes/*.html',
        'app/_drafts/*',
        'app/_posts/*',
        'app/_config.yml',
        'app/*.html',
        'app/*.md',
        'app/*.yml',
        'app/assets/*',
        'app/images/*',
        'app/scripts/*',
        'app/styles/*.css'
    ], ['jekyll-rebuild']);
    gulp.watch('bower.json', ['bower']);
});

// Initial setup... Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['build', 'jekyll-build'], function() {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'build'
        }
    });
});

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    browserSync.notify('Running: jekyll build');
    return cp.spawn(
            'jekyll',
            //['build', '--source', 'app', '--destination', 'build'],
            ['build', '--drafts', '--source', 'app', '--destination', 'build'],
            { stdio: 'inherit' }
        ).on('close', done);
});
// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Build sass into a single site.min.css
gulp.task('sass', function () {
    browserSync.notify('Running: sass');
    gulp.src('app/styles/**/*.scss')
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(sass({
            onError: browserSync.notify,
            errLogToConsole: true
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(minifyCSS())
        .pipe(rename('site.min.css'))
        .pipe(sourcemaps.write())
        .pipe(debug())
        .pipe(gulp.dest('app/styles'));

});

gulp.task('vendor', function() {
    gulp.src([
        'app/bower_components/normalize.css/normalize.css',
        'app/foundation-5.5.1.custom/css/foundation.css',
        'app/bower_components/typeplate-starter-kit/css/typeplate.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(minifyCSS())
    .pipe(concat('vendor.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/styles'));
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

// gulp.task('js', function() {
//     gulp.src('app/scripts/**/*.js')
//         .pipe(concat('build.js'))
//         .pipe(uglify())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest('build/js'))
//         .pipe(browserSync.reload({ stream: true }))
//         .pipe(gulp.dest('build/js'));
// });

// gulp.task('images', function() {
//     gulp.src('src/images/**/*.+(png|jpeg|jpg|gif|svg)')
//         .pipe(imagemin())
//         .pipe(gulp.dest('_site/dist/img'))
//         .pipe(browserSync.reload({ stream: true }))
//         .pipe(gulp.dest('dist/img'));
// })
