var mysql = require('mysql');
var Rx = require('rxjs/Rx');
var path = require('path');
var fs = require('fs');
var async = require('async');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}


module.exports = {

    retrieveAllStylist: function (req, res, next) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'hairb2b'
        });
        connection.connect();

        connection.query('select \n' +
            '    ts.id as id, \n' +
            '    ts.first_name as first_name, \n' +
            '    ts.last_name as last_name, \n' +
            '    ts.address_line_1 as address_line_1, \n' +
            '    ts.address_line_2 as address_line_2, \n' +
            '    ts.city as city, \n' +
            '    ts.state as state, \n' +
            '    ts.country as country, \n' +
            '    ts.telephone as telephone,\n' +
            '    ts.description as description, \n' +
            '    ts.terms_and_conditions as terms_and_conditions,\n' +
            '    tjr.role as job_role,\n' +
            '    tp.created_date as created_date,\n' +
            '    tp.is_active as is_active,\n' +
            '    tg.path as profile_pic,\n' +
            '    tp.rating as rating\n' +
            'from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg\n' +
            'where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id\n' +
            'order by 16 desc', function (err, rows, fields) {
            if (err) throw  err;
            var stylists = [];

            async.each(rows, function (row, callback) {
                var stylist = {};
                stylist.id = row.id;
                stylist.first_name = row.first_name;
                stylist.last_name = row.last_name;
                stylist.address_line_1 = row.address_line_1;
                stylist.address_line_2 = row.address_line_2;
                stylist.city = row.city;
                stylist.state = row.state;
                stylist.country = row.country;
                stylist.telephone = row.telephone;
                stylist.description = row.description;
                stylist.terms_and_condition = row.terms_and_condition;
                stylist.job_role = row.job_role;
                stylist.created_date = row.created_date;
                stylist.is_active = row.is_active;
                stylist.profile_pic = base64_encode(path.resolve(row.profile_pic));
                stylist.rating = row.rating;
                stylist.skills = [];
                stylist.pref_locations = [];
                stylist.charges = [];
                stylist.busyDates = [];

                // connection.query('select\n' +
                //     'tsk.description\n' +
                //     'from trn_stylist ts, trn_skill tsk, trn_stylist_skill tss\n' +
                //     'where ts.profile_id = tss.stylist_id and tss.skill_id = tsk.id and ts.profile_id=2', function (err, rows, fields) {
                //     var skills = [];
                //     async.each(rows, function (row, callb) {
                //         skills.push(__r.description);
                //         stylist.skills.push(__r.description);
                //         callb();
                //     });
                //     stylist.skills = skills;
                //
                // });

                stylists.push(stylist);
                callback();
            });

            res.setHeader('Content-type', 'application/json');
            res.status(200).send(stylists);
        });

        // connection.end();
    },

    retrieveAllStylistUsingPromise: function (req, res, next) {
        var database = new Database();
        var firstResulst, secondRestulst;
        var stylists = [];
        database.query('select \n' +
            '    ts.id as id, \n' +
            '    ts.first_name as first_name, \n' +
            '    ts.last_name as last_name, \n' +
            '    ts.address_line_1 as address_line_1, \n' +
            '    ts.address_line_2 as address_line_2, \n' +
            '    ts.city as city, \n' +
            '    ts.state as state, \n' +
            '    ts.country as country, \n' +
            '    ts.telephone as telephone,\n' +
            '    ts.description as description, \n' +
            '    ts.terms_and_conditions as terms_and_conditions,\n' +
            '    tjr.role as job_role,\n' +
            '    tp.created_date as created_date,\n' +
            '    tp.is_active as is_active,\n' +
            '    tg.path as profile_pic,\n' +
            '    tp.rating as rating\n' +
            'from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg\n' +
            'where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id\n' +
            'order by 16 desc').then(rows => {
                // firstResulst = rows;
                // console.log(rows);


                var stylist = {};
                stylist.id = rows[0].id;
                stylist.first_name = rows[0].first_name;
                stylist.last_name = rows[0].last_name;
                stylist.address_line_1 = rows[0].address_line_1;
                stylist.address_line_2 = rows[0].address_line_2;
                stylist.city = rows[0].city;
                stylist.state = rows[0].state;
                stylist.country = rows[0].country;
                stylist.telephone = rows[0].telephone;
                stylist.description = rows[0].description;
                stylist.terms_and_condition = rows[0].terms_and_condition;
                stylist.job_role = rows[0].job_role;
                stylist.created_date = rows[0].created_date;
                stylist.is_active = rows[0].is_active;
                stylist.profile_pic = base64_encode(path.resolve(rows[0].profile_pic));
                stylist.rating = rows[0].rating;
                stylist.skills = [];

                var r = database.query('select\n' +
                    'tsk.description\n' +
                    'from trn_stylist ts, trn_skill tsk, trn_stylist_skill tss\n' +
                    'where ts.profile_id = tss.stylist_id and tss.skill_id = tsk.id and ts.profile_id=' + rows[0].id);
                for (let i = 1; i <= rows.length; i++) {
                    r.then(__rows => {
                            __rows.map(val => {
                                stylist.skills.push(val.description);
                            });
                            // console.log(stylist);
                            stylists.push(stylist);

                            if (i < rows.length) {
                                stylist.id = rows[i].id;
                                stylist.first_name = rows[i].first_name;
                                stylist.last_name = rows[i].last_name;
                                stylist.address_line_1 = rows[i].address_line_1;
                                stylist.address_line_2 = rows[i].address_line_2;
                                stylist.city = rows[i].city;
                                stylist.state = rows[i].state;
                                stylist.country = rows[i].country;
                                stylist.telephone = rows[i].telephone;
                                stylist.description = rows[i].description;
                                stylist.terms_and_condition = rows[i].terms_and_condition;
                                stylist.job_role = rows[i].job_role;
                                stylist.created_date = rows[i].created_date;
                                stylist.is_active = rows[i].is_active;
                                stylist.profile_pic = base64_encode(path.resolve(rows[i].profile_pic));
                                stylist.rating = rows[i].rating;
                                stylist.skills = [];
                                r = database.query('select\n' +
                                    'tsk.description\n' +
                                    'from trn_stylist ts, trn_skill tsk, trn_stylist_skill tss\n' +
                                    'where ts.profile_id = tss.stylist_id and tss.skill_id = tsk.id and ts.profile_id=' + rows[i].id);
                                console.log(rows[i].id);
                            } else {
                                r.then(res.send(stylists));
                            }
                        }
                    );
                }

            }
        );

    },

    retrieveSkillsForStylist: function (req, res, next) {
        var id = req.params.id;

        var database = new Database();
        var skills = [];
        database.query('select\n' +
            'tsk.description\n' +
            'from trn_stylist ts, trn_skill tsk, trn_stylist_skill tss\n' +
            'where ts.profile_id = tss.stylist_id and tss.skill_id = tsk.id and ts.profile_id=' + id).then(rows => {
            skills = rows.map(row => {
                return row.description;
            });
            res.send(skills);

        });
        database.close();

    },

    retrievePreferredLocationsForStylist: function (req, res, next) {
        var id = req.params.id;

        var database = new Database();
        var pref_locations = [];
        database.query('select tl.city as city, tl.state as state\n' +
            'from trn_location tl, trn_preferred_location tpl\n' +
            'where tl.id = tpl.location_id and tpl.stylist_id = ' + id).then(rows => {
            pref_locations = rows.map(row => {
                return row.city;
            });
            res.send(pref_locations);


        });
        database.close();
    },

    retrieveStylistsForSkill: function (req, res, next) {
        var skill = req.params.skill;

        var stylists = [];

        var database = new Database();

        database.query('select \n' +
            '    ts.id as id, \n' +
            '    ts.first_name as first_name, \n' +
            '    ts.last_name as last_name, \n' +
            '    ts.address_line_1 as address_line_1, \n' +
            '    ts.address_line_2 as address_line_2, \n' +
            '    ts.city as city, \n' +
            '    ts.state as state, \n' +
            '    ts.country as country, \n' +
            '    ts.telephone as telephone,\n' +
            '    ts.description as description, \n' +
            '    ts.terms_and_conditions as terms_and_conditions,\n' +
            '    tjr.role as job_role,\n' +
            '    tp.created_date as created_date,\n' +
            '    tp.is_active as is_active,\n' +
            '    tg.path as profile_pic,\n' +
            '    tp.rating as rating\n' +
            'from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg\n' +
            'where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id and \'' + skill + '\' in (select sk.description from trn_skill sk, trn_stylist_skill tss where tss.stylist_id = ts.profile_id and tss.skill_id = sk.id)\n' +
            'order by 16 desc').then(rows => {
            async.each(rows, function (row, callback) {
                var stylist = {};
                stylist.id = row.id;
                stylist.first_name = row.first_name;
                stylist.last_name = row.last_name;
                stylist.address_line_1 = row.address_line_1;
                stylist.address_line_2 = row.address_line_2;
                stylist.city = row.city;
                stylist.state = row.state;
                stylist.country = row.country;
                stylist.telephone = row.telephone;
                stylist.description = row.description;
                stylist.terms_and_condition = row.terms_and_condition;
                stylist.job_role = row.job_role;
                stylist.created_date = row.created_date;
                stylist.is_active = row.is_active;
                stylist.profile_pic = base64_encode(path.resolve(row.profile_pic));
                stylist.rating = row.rating;
                stylist.skills = [];
                stylist.pref_locations = [];
                stylist.charges = [];
                stylist.busyDates = [];

                stylists.push(stylist);
                callback();
            });

            res.setHeader('Content-type', 'application/json');
            res.status(200).send(stylists);
        });

        database.close()
    },

    retrieveStylistById: function (req, res, next) {
        var id = +req.params.id;
        var database = new Database();

        database.query('select \n' +
            '    ts.id as id, \n' +
            '    ts.first_name as first_name, \n' +
            '    ts.last_name as last_name, \n' +
            '    ts.address_line_1 as address_line_1, \n' +
            '    ts.address_line_2 as address_line_2, \n' +
            '    ts.city as city, \n' +
            '    ts.state as state, \n' +
            '    ts.country as country, \n' +
            '    ts.telephone as telephone,\n' +
            '    ts.description as description, \n' +
            '    ts.terms_and_conditions as terms_and_conditions,\n' +
            '    tjr.role as job_role,\n' +
            '    tp.created_date as created_date,\n' +
            '    tp.is_active as is_active,\n' +
            '    tg.path as profile_pic,\n' +
            '    tp.rating as rating\n' +
            'from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg\n' +
            'where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id and ts.profile_id = ' + id +
            ' order by 16 desc').then(rows => {
            var stylist = {};
            stylist.id = rows[0].id;
            stylist.first_name = rows[0].first_name;
            stylist.last_name = rows[0].last_name;
            stylist.address_line_1 = rows[0].address_line_1;
            stylist.address_line_2 = rows[0].address_line_2;
            stylist.city = rows[0].city;
            stylist.state = rows[0].state;
            stylist.country = rows[0].country;
            stylist.telephone = rows[0].telephone;
            stylist.description = rows[0].description;
            stylist.terms_and_condition = rows[0].terms_and_condition;
            stylist.job_role = rows[0].job_role;
            stylist.created_date = rows[0].created_date;
            stylist.is_active = rows[0].is_active;
            stylist.profile_pic = base64_encode(path.resolve(rows[0].profile_pic));
            stylist.rating = rows[0].rating;
            stylist.skills = [];
            stylist.pref_locations = [];
            stylist.charges = [];
            stylist.busyDates = [];
            res.send(stylist);
        });

        database.close();
    },

    retrieveStylistByName: function (req, res, next) {
        var name = req.params.name;
        var first_name = name.split(' ')[0];
        var last_name = name.split(' ')[1];

        var database = new Database();

        database.query('select \n' +
            '    ts.id as id, \n' +
            '    ts.first_name as first_name, \n' +
            '    ts.last_name as last_name, \n' +
            '    ts.address_line_1 as address_line_1, \n' +
            '    ts.address_line_2 as address_line_2, \n' +
            '    ts.city as city, \n' +
            '    ts.state as state, \n' +
            '    ts.country as country, \n' +
            '    ts.telephone as telephone,\n' +
            '    ts.description as description, \n' +
            '    ts.terms_and_conditions as terms_and_conditions,\n' +
            '    tjr.role as job_role,\n' +
            '    tp.created_date as created_date,\n' +
            '    tp.is_active as is_active,\n' +
            '    tg.path as profile_pic,\n' +
            '    tp.rating as rating\n' +
            'from trn_stylist ts, trn_profile tp, trn_job_role tjr, trn_gallery tg\n' +
            'where ts.profile_id = tp.id and ts.job_role = tjr.id and tp.profile_pic = tg.id and (ts.first_name like \'%' + first_name + '%\' or ts.last_name like \'%' + last_name + '%\')' +
            ' order by 16 desc').then(rows => {
            var stylist = {};
            stylist.id = rows[0].id;
            stylist.first_name = rows[0].first_name;
            stylist.last_name = rows[0].last_name;
            stylist.address_line_1 = rows[0].address_line_1;
            stylist.address_line_2 = rows[0].address_line_2;
            stylist.city = rows[0].city;
            stylist.state = rows[0].state;
            stylist.country = rows[0].country;
            stylist.telephone = rows[0].telephone;
            stylist.description = rows[0].description;
            stylist.terms_and_condition = rows[0].terms_and_condition;
            stylist.job_role = rows[0].job_role;
            stylist.created_date = rows[0].created_date;
            stylist.is_active = rows[0].is_active;
            stylist.profile_pic = base64_encode(path.resolve(rows[0].profile_pic));
            stylist.rating = rows[0].rating;
            stylist.skills = [];
            stylist.pref_locations = [];
            stylist.charges = [];
            stylist.busyDates = [];

            res.send(stylist);
        });

        database.close();
    },


    retrieveChargesForStylist: function (req, res, next) {
        var id = req.params.id;
        var database = new Database();

        database.query('select name, charge, currency\n' +
            'from trn_charge_per_slot tcps, trn_time_slot tts\n' +
            'where tcps.time_slot_id = tts.id and tcps.stylist_id = ' + id).then(rows => {
            var charges = rows.map(row => {
                return row;
            });

            res.send(charges);
        });

        database.close();
    },

    retrieveStylistNames: function (req, res, next) {
        var database = new Database();

        database.query('select first_name, last_name from trn_stylist').then(rows => {
            var names = rows.map(row => {
                return row.first_name + ' ' + row.last_name;
            });

            res.send(names);
        });

        database.close();
    }


};

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