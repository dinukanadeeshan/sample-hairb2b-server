var express = require('express');

var path = require('path');

var router = express.Router();

var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

/* GET home page. */
router.get('/getskills', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify([
        {
            id: 1,
            skill: 'Bridal'
        },
        {
            id: 2,
            skill: 'Curling'
        },
        {
            id: 3,
            skill: 'Rebonding'
        },
        {
            id: 4,
            skill: 'Hair Coloring'
        },
        {
            id: 5,
            skill: 'Hair Cutting'
        }
    ]));
});

router.get('/image', function (req, res, next) {
    var base64str = base64_encode(path.resolve('./public/images/pay.jpg'));
    console.log(base64str);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({img: base64str, path: path.resolve('./public/images/pay.jpg')}));
});


module.exports = router;
