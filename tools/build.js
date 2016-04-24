'use strict';
import gulp from 'gulp';
import { paths } from './config';

gulp.task('serve', gulp.parallel('webpack', 'server'));
