var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  const us = [
    {
      name: '테스트1',
      age: 14
    },
    {
      name: '테스트2',
      age: 24
    }
  ]
  res.send({ users: us })
});

// sdfd
router.all('*', function(req, res, next) {
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;