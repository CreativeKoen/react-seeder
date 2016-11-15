var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
// var compiler = webpack(config);
//
// app.use(devMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   historyApiFallback: true,
// }));
//
// app.use(hotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8000/');
});
// require('babel-core/register');
// var path = require('path');
// var express = require('express');
// var bodyParser = require('body-parser');
//
// var app = express();
// var port = 8000;
//
// // Include static assets. Not advised for production
// app.use(express.static(path.join(__dirname, 'public')));
//
// // Set view path
// app.set('views', path.join(__dirname, 'views'));
//
// // set up ejs for templating. You can use whatever
// app.set('view engine', 'ejs');
//
// // Set up Routes for the application
// require('./react/router.js')(app);
//
// //Route not found -- Set 404
// app.get('*', function (req, res) {
//     res.json({
//         'route': 'Sorry this page does not exist!'
//     });
// });
//
// app.listen(port);
// console.log('Server is Up and Running at Port : %s', port);
