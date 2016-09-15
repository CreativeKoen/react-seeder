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
    ui: false,
    external: false,
    browser: ['Firefox']
    //,plugins: ['bs-fullscreen-message']
  });

  gulp.watch(paths.watch.react).on('change', gulp.parallel('webpack'));
  gulp.watch(paths.watch.views).on('change', gulp.series('views', browserSync.reload));

  gulp.watch(paths.watch.less).on('change', gulp.series('less'));
  gulp.watch(paths.watch.stylus).on('change', gulp.series('stylus'));
  gulp.watch(paths.watch.sass).on('change', gulp.series('sass'));
});
