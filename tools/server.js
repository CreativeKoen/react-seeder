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

  gulp.watch(paths.watch.react).on('change', gulp.series('webpack', browserSync.reload) );
  gulp.watch(paths.watch.views).on('change', gulp.series('jade', browserSync.reload) );
  gulp.watch(paths.watch.styles).on('change', gulp.series('stylus', browserSync.reload) );
  // gulp.watch(paths.watch.backend).on('change', browserSync.reload );
});
