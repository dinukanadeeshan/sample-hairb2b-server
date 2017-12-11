var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).send('Sample HairB2B server is working for Salon API...');
});

module.exports = router;
