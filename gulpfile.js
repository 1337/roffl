const {
    gulp = require('gulp'),
    data = require('gulp-data'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps')
};


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('less/*.less', ['less']);
});

// Get one .styl file and render
gulp.task('one', function () {
    return gulp.src('./css/one.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/build'));
});

// Options
// Options compress
gulp.task('compress', function () {
    return gulp.src('./css/compressed.styl')
        .pipe(stylus({compress: true}))
        .pipe(gulp.dest('./css/build'));
});


// Set linenos
gulp.task('linenos', function () {
    return gulp.src('./css/linenos.styl')
        .pipe(stylus({linenos: true}))
        .pipe(gulp.dest('./css/build'));
});

// Include css
// Stylus has an awkward and perplexing 'include css' option
gulp.task('include-css', function () {
    return gulp.src('./css/*.styl')
        .pipe(stylus({
            'include css': true
        }))
        .pipe(gulp.dest('./'));

});

// External sourcemaps
gulp.task('sourcemaps-external', function () {
    return gulp.src('./css/sourcemaps-external.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/build'));
});


// Default gulp task to run
gulp.task('default', ['one', 'compress', 'linenos', 'sourcemaps-inline', 'sourcemaps-external', 'pass-object']);

