// const createError = require('http-errors');
const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
//const path = require('path');
const bodyParser = require('body-parser');
const studentRoutes = require('./Routes/studentRoutes');
//var logger = require('morgan');
//const cookieParser =require('cookie-parser')
//require('dotenv').config()
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//app.use(logger('dev'));
mongoose.Promise = global.Promise;

const app = express();

const mongoUri = "mongodb://localhost:27017/student";

mongoose.connect(mongoUri,{ 
  useNewUrlParser: true ,
  useUnifiedTopology: true ,
  useCreateIndex: true,});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/student' , studentRoutes);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//catch 404 and forward to error 
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
//app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
//   res.status(err.status || 500);
//   res.render('error');
//  });

module.exports = app;
