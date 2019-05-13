var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use('/api', require('./routes/api'));
// console.log(path.join(__dirname, '../', 'fe', 'dist'))
app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));

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
  res.send({ msg : err.message});
});

module.exports = app;

const jwt = require('jsonwebtoken');
const key = '마이스터고'
const token = jwt.sign({ id: 'mangbo', email: 'whdudghks45629@gmail.com' }, key);
console.log(token)

const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//   name: { type: String, default: '', unique: true, index: true },
//   age: { type: Number, default: 1 }
// })

// const User = mongoose.model('User', userSchema)
const User = require('./models/users')

mongoose.connect('mongodb://localhost:27017/mangbo', { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err)
  console.log('mongoose connected!')
//쓰기
  // User.create({name: '하하' })
  //   .then(r => console.log(r))
  //   .catch(e => console.log(e))
//읽기
    // User.find()
    // .then(r => console.log(r))
    // .catch(e => console.log(e))
//업데이트
  // User.updateOne({ _id: '5cbd1e6662e8d634482fa922' }, { $set: { age: 27} })

  // .then(r => {
  //   console.log(r)
  //   console.log('updated')
  //   return User.find()
  // })
  // .then(r => console.log(r))
  // .catch(e => console.error(e))
// 삭제
  // User.deleteOne({ name: '마이스터' })
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e))
})