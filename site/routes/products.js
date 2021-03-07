var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product');
});

router.get('/create', function(req, res, next) {
  res.render('products/product-form');
});

module.exports = router;
