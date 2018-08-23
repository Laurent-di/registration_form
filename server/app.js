var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.static(path.join(__dirname,'..', 'client' ,'uploads')));
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.redirect('/');
});

module.exports = app;
