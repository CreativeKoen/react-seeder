'use strict';
import gulp from 'gulp';

gulp.task('build:react', gulp.parallel('webpack', 'stylus'));
gulp.task('serve:react', gulp.parallel('build:react', 'server'));

gulp.task('build:r:front', gulp.parallel('webpack', 'stylus', 'jade'));
gulp.task('serve:r:front', gulp.parallel('build:r:front', 'server'));
