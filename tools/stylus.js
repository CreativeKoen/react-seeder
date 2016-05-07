'use strict';
import gulp from 'gulp';
import { paths, banner } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from '../package.json';
const $ = gulpLoadPlugins();

import nib from 'nib';
import rupture from 'rupture';
import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
import lost from 'lost';

let compilers = [
  lost(),
  autoprefixer()
];

gulp.task('stylus', () => {
  return gulp.src(paths.files.stylus)
    .pipe($.stylus({
      use: [
        nib(), rupture(),
        poststylus(compilers)
      ]
    }))
    .on('error', (err) => { console.error(err); })
    .pipe($.cssnano())
    .pipe($.header(banner, {pkg: pkg}))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dest.public+'css'));
});
/*
add this to the package.json and uncomment it in
the server.js so browserSync will pick it up


"lost": "^6.7.2",
"jeet": "^6.1.2",
"nib": "^1.1.0",
"rupture": "^0.6.1",
"gulp-cssnano": "^2.1.1",
"gulp-stylus": "^2.3.0",
"poststylus": "^0.2.3"
*/
