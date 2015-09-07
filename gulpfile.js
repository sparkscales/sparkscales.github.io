"use strict";

var gulp = require('gulp'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
  please = require('gulp-pleeease');

var PleeeaseOptions = {
    optimizers: {
        minifier: false
    }
};

gulp.task('compileSass', function() {
    gulp.src("scss/style.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', function () {
    gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(please(PleeeaseOptions))
        .pipe(gulp.dest('css'));
});
