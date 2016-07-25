// var path = require('path');
const date = new Date();

let banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @author <%= pkg.author %>',
  ' *',
  ` * compiled on ${date}`,
  ' */',
  ''].join('\n');


let paths = {
  watch: {
    react: 'react/**/**/*.js',
    backend: 'database/**/**/*.js',
    views: 'resources/views/**/**/*.pug',
    less: 'resources/less/**/**/*.less',
    sass: 'resources/sass/**/**/*.scss',
    stylus: 'resources/stylus/**/**/*.styl'
  },
	test: {
		react: 'react/**/**/.test.js'
	},
  dest: {
    public: 'public/Static/',
    publicViews: 'public/',
    dist: 'dist/Static/',
    distViews: 'dist/'
  },
  files: {
    react: 'react/**/**/*.js',
    webpackreact: 'react/App.js',
    views: 'resources/views/**/**/*.pug',
    less: 'resources/less/app.less',
    stylus: 'resources/stylus/app.styl',
    sass: 'resources/sass/app.scss'
  },
}

module.exports.paths = paths;
module.exports.banner = banner;
