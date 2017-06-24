const concat = require('gulp-concat');
const gulp = require('gulp');
const data = require('gulp-data');
const livereload = require('gulp-livereload');
const webserver = require('gulp-webserver');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const tsOptions = 'tsconfig.json';
const tsProject = ts.createProject(tsOptions);

const paths = {
    ts: ['src/js/**/*.ts'],
    stylus: ['src/css/**/*.styl']
};


gulp.task('run-js', function () {
    console.info('Updating TS...');

    var tsResult = gulp.src(paths.ts)
        .pipe(tsProject());

    return tsResult.js
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest('www/js'));
});


gulp.task('run-stylus', function () {
    gulp.src(paths.stylus)
        .pipe(stylus())
        .pipe(gulp.dest('./www/css'));
});


gulp.task('run', ['run-js', 'run-stylus'], function () {
    gulp.src('www/')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8103
        }));
});


gulp.task('watch', function () {
    livereload.listen({
        port: 35731
    });
    gulp.watch(paths.ts, ['run-js']);
    gulp.watch(paths.stylus, ['run-stylus']);
});


// Default gulp task to run
gulp.task('default', ['run', 'watch']);

