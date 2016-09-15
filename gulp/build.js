'use strict';
import gulp from 'gulp';
import { paths } from './config';

gulp.task('build', gulp.parallel('webpack', 'views', 'less'));
gulp.task('build.sass', gulp.parallel('webpack', 'views', 'sass'));
gulp.task('build.stylus', gulp.parallel('webpack', 'views', 'stylus'));

gulp.task('serve', gulp.series('build', 'server'));
gulp.task('serve.sass', gulp.series('build.sass', 'server'));
gulp.task('serve.stylus', gulp.series('build.stylus', 'server'));

gulp.task('publish', () => {
  // upload to github pages
  // or something else
  console.log("where shall I publish to?? github pages?");
});
