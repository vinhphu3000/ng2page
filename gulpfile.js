var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

var cleanCSS = require('gulp-clean-css');

var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var rtlcss = require("gulp-rtlcss");
var sourcemaps = require('gulp-sourcemaps');

//var sass = require('gulp-sass');
var less = require('gulp-less');

var del = require('del');
var vinylPaths = require('vinyl-paths');

var shell = require("gulp-shell");
var runSequence = require("run-sequence");
var replace = require("gulp-replace");
var insert = require("gulp-insert");
var concat = require("gulp-concat");
var jsdoc = require('gulp-jsdoc3');
var tslint = require("gulp-tslint");
var tslintStylish = require('gulp-tslint-stylish');
var styleguide = require('devbridge-styleguide');

var PATHS = {
    src: {
        ts: './src/app/**/*.ts',
        template: './src/app/**/*.html',
        assets: './src/assets',
        core: './src/core'
    },
    dist: {
        app: './dist/app',
        assets: './dist/assets',
        core: './dist/core',
        root: './dist'
    },
    /*sassdocOptions: {
        dest: './dist/docs/sassdoc'
    }*/
};

gulp.task('clean', function () {
    return gulp.src('./dist')
            .pipe(vinylPaths(del));
            //.pipe(gulp.dest('dist'));
});

gulp.task("lint", function () {
    return gulp.src(PATHS.src.ts)
        .pipe(tslint())
        .pipe(tslint.report(tslintStylish, {
            emitError: false,
            sort: true,
            bell: true,
            fullPath: true
        }));
});

gulp.task('typescript', function () {
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');

    var tsResult = gulp.src(PATHS.src.ts)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions));

    tsResult.dts.pipe(gulp.dest(PATHS.dist.app));
    tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.dist.app));
    return tsResult;
});


//TASKS
/*gulp.task('sasscore', function () {
    gulp.src(PATHS.src.core + '/scss/!**!/!*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                style: 'compressed',
                errLogToConsole: true

            }).on('error', function (err) {
                console.log(err);
                this.emit('end');
            })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(PATHS.src.core + '/css/'));

    return gulp.src([PATHS.src.core + '/css/!**!/!*.*']).pipe(gulp.dest(PATHS.dist.core + '/css'));
    //.pipe(notify({message: 'SCSS Compiled'}));

});*/

gulp.task('lesscore', function () {
    gulp.src(PATHS.src.core + '/less/**/pages.less')
        .pipe(sourcemaps.init())
        .pipe(
            less().on('error', function (err) {
                console.log(err);
                this.emit('end');
            })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(PATHS.src.core + '/css/'));

    return gulp.src([PATHS.src.core + '/css/**/*.*']).pipe(gulp.dest(PATHS.dist.core + '/css'));
    //.pipe(notify({message: 'SCSS Compiled'}));

});

/*gulp.task('sassassets', function () {
    gulp.src(PATHS.src.assets + '/scss/!**!/!*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                 style: 'compressed',
                 errLogToConsole: true

                 }).on('error', function (err) {
                notify().write(err);
                this.emit('end');
            })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(PATHS.src.assets + '/css'))

    return gulp.src([PATHS.src.assets + '/css/!*.*']).pipe(gulp.dest(PATHS.dist.assets + '/css'));

    //.pipe(notify({message: 'SCSS Compiled'}));

});*/

gulp.task('lessassets', function () {
    gulp.src(PATHS.src.assets + '/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(
            less().on('error', function (err) {
                notify().write(err);
                this.emit('end');
            })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest(PATHS.src.assets + '/css'))

    return gulp.src([PATHS.src.assets + '/css/*.*']).pipe(gulp.dest(PATHS.dist.assets + '/css'));

    //.pipe(notify({message: 'SCSS Compiled'}));

});

/*gulp.task('sasswatch', function () {
    return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
        .watch(PATHS.dist.core, ['sass'])
        // When there is a change,
        // log a message in the console
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});*/


gulp.task('jsdoc', function (cb) {
    var config = require('./jsdoc.json');
    return gulp.src(['README.md', PATHS.dist.app + '/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});

/*
gulp.task('sassdoc', function () {
    return gulp
        .src(PATHS.src.core + '/scss/pages.scss')
        .pipe(sassdoc(PATHS.sassdocOptions))
        .resume();
});
*/

gulp.task('copy', function () {
    return gulp.src(['./src/**/*']).pipe(gulp.dest('./dist'));
});

/*gulp.task('copyjs', function () {
 return gulp.src(['./src/app/!**!/!*.js']).pipe(gulp.dest('./dist/app'));
 });*/

gulp.task('copyassets', function () {
    return gulp.src([PATHS.src.assets + '/**/*']).pipe(gulp.dest(PATHS.dist.assets));
});

gulp.task('copycore', function () {
    return gulp.src([PATHS.src.core + '/**/*']).pipe(gulp.dest(PATHS.dist.core));
});

gulp.task('template', function () {
    return gulp.src([PATHS.src.template]).pipe(gulp.dest(PATHS.dist.app));
});


//*** CSS & JS minify task
gulp.task('minifycss', function () {
    // css minify
    return gulp.src([PATHS.dist.root + '/**/*.css', '!' + PATHS.dist.root + '/**/*.min.css'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ' min : ' + details.stats.minifiedSize);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.dist.root));
});

gulp.task('uglifyjs', function () {
    return gulp.src([PATHS.dist.app + '/**/*.js', '!' + PATHS.dist.app + '/**/*.min.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.dist.app));

});


gulp.task('start-styleguide', function () {
    styleguide.startServer();
});

/*gulp.task('run', ['build'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(PATHS.src, ['ts2js']);
    gulp.watch('./src/sass/!**!/!*.scss', ['buildcss']);
    gulp.watch('./src/!**!/!*.html', ['copyhtml']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});*/

// entry point - run tasks in a sequence

gulp.task("compile", function (callback) {
    return runSequence(
        "lint",
        ["lessassets", "template"],
        "typescript",
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log("FINISHED compile SUCCESSFULLY");
            }
            callback(error);
        });

});

gulp.task("build", ["compile", 'lesscore',
    "copyassets",
    "copycore"], function () {
    console.log("FINISHED build SUCCESSFULLY");
    done();
});


gulp.task("rebuild", ['clean', 'build'], function () {

    console.log("FINISHED rebuild SUCCESSFULLY");

});


gulp.task("deploy", ["rebuild",
    "minifycss",
    "uglifyjs"], function (callback) {
    console.log("FINISHED deploy SUCCESSFULLY");


});

gulp.task('default', ['build']);
