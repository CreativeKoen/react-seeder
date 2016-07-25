'use strict';
import gulp from 'gulp';
import config as c from './config';
import gulpLoad-plugins from 'gulp-load-plugins';
import pkg from '../package.json';
const $ = gulpLoadPlugins();

import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
// import them
// require('nib')(),
// require('rupture')(),
// require('jeet')(),
// require('poststylus')(autoprefixer)
gulp.task('stylus', () => {
  return gulp.src(config.paths.files.stylus)
    .pipe($.stylus({
      use: [
      ]
    }))
    .on('error', (err) => { console.error(err); })
    .pipe($.cssnano())
    .pipe($.header(config.banner, {pkg: pkg}))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.PUBLICPATH+'css'));
});
/*
add this to the package.json and uncomment it in
the server.js so browserSync will pick it up

"jeet": "^6.1.2",
"nib": "^1.1.0",
"rupture": "^0.6.1",
"gulp-cssnano": "^2.1.1",
"gulp-stylus": "^2.3.0",
"poststylus": "^0.2.3"
*/
