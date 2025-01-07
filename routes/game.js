var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('newGame', { title: 'Jeopardy!', renderTime: new Date() });
});

module.exports = router;