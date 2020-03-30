var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const lienhe = require('./routes/lienhe');
const trangchu = require('./routes/trangchu');
const gioithieu = require('./routes/gioithieu');
const tintuc = require('./routes/tintuc');
const huongdan = require('./routes/huongdan');
const chitiet = require('./routes/chitietcontent');
const addsp = require('./routes/addsp');
const giohang =require('./routes/giohang');

const sessionMiddlewarel = require('./middlewarel/sessionMiddlewarel');
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("sdfjsfhsjdfh432"));
app.use(sessionMiddlewarel);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', trangchu );
app.use('/lienhe/', lienhe);
app.use('/gioithieu/', gioithieu);
app.use('/tintuc/', tintuc);
app.use('/huongdan/', huongdan);
app.use('/chitiet/', chitiet);
app.use('/addsp/', addsp);
app.use('/giohang/', giohang);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
