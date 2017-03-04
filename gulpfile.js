/**
 * Created by designersingh on 9/3/16.
 */

var gulp = require('gulp');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var modRewrite = require('connect-modrewrite');
var htmlReplace = require('gulp-html-replace');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var ngTemplateCache = require('gulp-angular-templatecache');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var urlAdjuster = require('gulp-css-url-adjuster');
var minimist = require('minimist');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var cssnano = require('gulp-cssnano');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');
var lazypipe = require('lazypipe');
var merge = require('merge-stream');
var del = require('del');


var config = require('./gulp.config');


var args = process.argv.slice(2);
var projectName = args[0] || null;

var knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'dev' }
};

var options = minimist(process.argv.slice(2), knownOptions);
isProd = options.env == "prod" ? true : false;
gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json')
    };
    return gulp.src('./app/dynamic/index.html')
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(['./app/dynamic/js/**/*.js', './app/dynamic/css/**/*.css'], { read: false }), { ignorePath: '/app/dynamic' }))
        .pipe(gulp.dest('./app/dynamic'))

});


/* SASS Compile & css */
gulp.task('sass', function() {
    return gulp.src(config.styleSheets.src)
        .pipe(sass({
            outputStyle: "expanded" //compressed ,expanded
        }).on('error', sass.logError))
        .pipe(minifyCss({ keepSpecialComments: 0 }))
        .pipe(concat("components.css"))
        .pipe(gulp.dest(config.styleSheets.dist));
});

gulp.task('css', function() {
    return gulp.src(config.vendorCss.src)
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("./app/dynamic/build/assets/css/"));
});

/* vendor scripts */
gulp.task('vendorJs', function() {
    return gulp.src(config.vendorJs.src)
        .pipe(gulpif(isProd, uglify()))
        .pipe(concat("vendor.js"))
        .pipe(gulpif(isProd, rename({ suffix: '.min' })))
        .pipe(gulp.dest("./app/dynamic/build/assets/js"));
});


gulp.task('scripts', function() {
    return gulp.src(config.scripts.src)
        //.pipe(gulpif(isProd, uglify()))
        .pipe(concat("scripts.js"))
        .pipe(gulpif(isProd, rename({ suffix: '.min' })))
        .pipe(gulp.dest("./app/dynamic/build/assets/js"));
});

gulp.task('serve', [], function() {
    browserSync.init('./app/dynamic/**/*.*', {
        port: 3000,
        server: {
            baseDir: './app/dynamic',
            middleware: [historyApiFallback()]

        }
    });
});
/* Clean css/js and templates */
gulp.task('clean', function() {
    return del([
        "./app/dynamic/build/",
        "./app/dynamic/build/**"
    ]);
});

gulp.task('copyBuildFiles', function() {
    return gulp.src(['./app/dynamic/assets/**/', '!./app/dynamic/assets/sass/', '!./app/dynamic/assets/sass/**'])
        .pipe(gulp.dest("./app/dynamic/build/"));
});


gulp.task('watch', function() {
    gulp.watch([config.styleSheets.src, './app/dynamic/**/*.scss'], ['watch-update-tasks']);
});

gulp.task('watch-update-tasks', function(callback) {
    runSequence(['sass'], callback);
});

gulp.task('build', function(callback) {
    // ['css'] ,['copyBuildFiles'],
    runSequence(['clean'], ['sass'], ['vendorJs'], ['scripts'], ['serve', 'watch'], callback);
});

gulp.task('default', ['build']);
