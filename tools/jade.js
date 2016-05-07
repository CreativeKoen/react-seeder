'use strict';
import gulp from 'gulp';
import { paths,views } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
const $ = gulpLoadPlugins();

gulp.task('jade', () => {
  return gulp.src(paths.files.views)
		.pipe($.jade({ pretty: true }))
    .pipe(gulp.dest(paths.dest.views));
});
