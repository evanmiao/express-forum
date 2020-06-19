var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

require('./filter')

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var topicRouter = require('./routes/topic');

var app = express();

app.use(sassMiddleware({
  src: __dirname + '/public/stylesheets/src',
  dest: __dirname + '/public/stylesheets',
  prefix: '/public/stylesheets',
  debug: true,
  outputStyle: 'compressed',
  sourceMap: true
}));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// view engine setup
app.engine('html', require('express-art-template'));
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'itcast',
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/topic', topicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
