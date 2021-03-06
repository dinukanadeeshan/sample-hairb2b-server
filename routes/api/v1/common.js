var express = require('express');

var path = require('path');

var router = express.Router();

var fs = require('fs');
var mysql = require('mysql');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

/* GET home page. */
router.get('/getskills', function (req, res, next) {

    var database = new Database();
    var skills = [];
    database.query('select * from trn_skill').then(rows => {
        skills = rows.map(row => {
            return {id: row.id, skill: row.description};
        });
        res.setHeader('Content-Type', 'application/json');
        res.send(skills);

    });
    database.close();
    // res.status(200).send(JSON.stringify([
    //     {
    //         id: 1,
    //         skill: 'Bridal'
    //     },
    //     {
    //         id: 2,
    //         skill: 'Curling'
    //     },
    //     {
    //         id: 3,
    //         skill: 'Rebonding'
    //     },
    //     {
    //         id: 4,
    //         skill: 'Hair Coloring'
    //     },
    //     {
    //         id: 5,
    //         skill: 'Hair Cutting'
    //     }
    // ]));
});
router.get('/jobroles', function (req, res, next) {
    var database = new Database();
    var job_roles = [];
    database.query('select * from trn_job_role').then(rows => {
        job_roles = rows.map(row => {
            return {id: row.id, role: row.role};
        });
        res.setHeader('Content-Type', 'application/json');
        res.send(job_roles);

    });
    database.close();
});

router.get('/image', function (req, res, next) {
    var p = path.resolve('./public/images/taunya.jpg');
    var base64str = base64_encode(p);
    console.log(base64str);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({img: base64str, path: p}));
});


module.exports = router;

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'hairb2b'
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}