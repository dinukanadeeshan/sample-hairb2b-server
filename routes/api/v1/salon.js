var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(200, 'Sample HairB2B server is working for Salon API...');
});

module.exports = router;
