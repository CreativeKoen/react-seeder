'use strict';
import gulp from 'gulp';
import { paths } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
const $ = gulpLoadPlugins();

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    port: 8000,
    ui: false
    // ,browser: ['Firefox']
  });

  gulp.watch(paths.watch.react).on('change', gulp.parallel('webpack', browserSync.reload) );
  // gulp.watch(paths.watch.backend).on('change', browserSync.reload );
  // gulp.watch(paths.watch.views).on('change', browserSync.reload);
});
