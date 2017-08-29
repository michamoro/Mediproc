var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mediproc' });
});

router.get('/s2', function(req, res, next) {
  res.render('epcpo/s2', { title: 'Seccion 2' });
});

module.exports = router;
