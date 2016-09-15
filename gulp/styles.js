'use strict';
import gulp from 'gulp';
import { paths, banner } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import pkg from '../package.json';
const $ = gulpLoadPlugins();

function compileStyles(path, compiler) {
  return gulp.src(path)
    .pipe($.sourcemaps.init())
    .pipe(compiler)
    .pipe($.concat('app.css'))
    .pipe($.autoprefixer({
      browsers: ['last 7 versions'],
      //browsers: ['last 3 versions', 'Firefox', 'Explorer', 'Edge', 'Opera', 'Safari'],
      cascade: false
    }))
    .pipe($.header(banner, {pkg: pkg}))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(paths.dest.public+'css'))

    .pipe($.cssnano())
    .pipe($.autoprefixer({
      browsers: ['last 7 versions'],
      //browsers: ['last 3 versions', 'Firefox', 'Explorer', 'Edge', 'Opera', 'Safari'],
      cascade: false
    }))
    .pipe($.header(banner, {pkg: pkg}))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dest.public+'css'))

    .pipe($.sourcemaps.write())
    .pipe($.header(banner, {pkg: pkg}))
    .pipe($.rename('app.min.css.map'))
    .pipe(gulp.dest(paths.dest.public+'css'));
}

gulp.task('less', (done) => {
  compileStyles( paths.files.less, $.less() );
  done();
});

gulp.task('stylus', (done) => {
  compileStyles( paths.files.stylus, $.stylus() );
  done();
});

gulp.task('sass', (done) => {
  compileStyles( paths.files.sass, $.sass() );
  done();
});
