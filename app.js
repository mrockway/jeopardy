require('@dotenvx/dotenvx').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

// Router setup
var indexRouter = require('./routes/index');
var gameRouter = require('./routes/game');

var app = express();

// view engine setup
hbs.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 0; i < n; ++i) {
    block.data.position = i + 1;
    block.data.clueNum = (i % 5) + 1;
    block.data.clueVal = ((i % 5) + 1)*100;
    block.data.categoryNum = Math.floor(i / 5) + 1;
    block.data.displayCategory = (i % 5 === 0)
    block.data.endDisplayCategory = (i % 5 === 4)
    accum += block.fn(this);
  }
  return accum;
});
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/games/', gameRouter);

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
  res.render('error');
});

module.exports = app;
