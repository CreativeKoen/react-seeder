'use strict';
import gulp from 'gulp';
import { paths } from './config';
import gulpLoadPlugins from 'gulp-load-plugins';
import isparta from 'isparta';
const $ = gulpLoadPlugins();

gulp.task('test', () => {
  return gulp.src(paths.test.jsUnit)
    .pipe($.mocha({reporter: 'spec', bail:true, ui: 'bdd'}));
});

gulp.task('test:watch', () => {
  gulp.watch(paths.test.jsUnit, gulp.parallel('mocha'));
});

gulp.task('test:coverage', $.jsxCoverage.createTask({
  src: [paths.test.react, paths.files.react],
  isparta: true,
  istanbul: {
    preserveComments: true,
    coverageVariable: '__MY_TEST_COVERAGE__',
    exclude: /node_modules|test[0-9]/
  },
  transpile: {
    babel: {
      include: /\.(js|jsx)?$/,
      exclude: /(node_modules|bower_components)/,
      omitExt: ['.jsx']
    },
  },
  babel: {
    presets: ['es2015', 'react', 'stage-0'],
    sourceMap: 'both'
  },
  coverage: {
    reporters: ['text'],
      //reporters: ['text', 'json', 'lcov'],
      //directory: 'coverage'
  },
  mocha: {
    reporter: 'nyan'
  },
}));
