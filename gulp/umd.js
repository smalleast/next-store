(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('umd', function() {
  return gulp.src('src/next-store.js')
      .pipe(gulp.dest('dist'));
  });


}());
