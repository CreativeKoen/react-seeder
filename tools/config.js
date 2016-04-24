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
  },
	test: {
		react: 'react/**/**/.test.js'
	},
  dest: {
    public: 'public/assets/'
  },
  files: {
    react: 'react/**/**/*.js',
    webpackreact: 'react/App.js',
  },
}

module.exports.paths = paths;
module.exports.banner = banner;
