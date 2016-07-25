'use strict';
import gulp from 'gulp';
import { paths } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('views', () => {
  return gulp.src(paths.files.views)
		.pipe($.pug({ pretty: true }))
    .pipe(gulp.dest(paths.dest.publicViews));
});

gulp.task('views.dist', () => {
  return gulp.src(paths.files.views)
		.pipe($.pug({ pretty: false }))
    .pipe(gulp.dest(paths.dest.distViews));
});
