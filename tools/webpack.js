'use strict';
import gulp from 'gulp';
import { paths, banner } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from '../package.json';
import webpack from 'webpack-stream'
const $ = gulpLoadPlugins();


gulp.task('webpack', (done) => {
  return gulp.src(paths.files.webpackreact)
  .pipe(webpack( require('../webpack.config.js') ))
  .pipe($.header(banner, {pkg: pkg}))
  .pipe(gulp.dest(paths.dest.public+'js'));
  done();
});
