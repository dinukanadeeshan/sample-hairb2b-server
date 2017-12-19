var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'hairb2b'
});

//
// module.export =  function () {
//
//         connection.connect();
//
//         connection.query('select now() as no', function (err, rows, fields) {
//             if (err) console.log(err);
//
//             console.log('The solution is: ', rows[0].no);
//         });
//
//         connection.end();
//     };
//
module.exports = {
    test: function () {
        connection.connect();

        connection.query('select now() as no', function (err, rows, fields) {
            if (err) console.log(err);

            console.log('The solution is: ', rows[0].no);
        });

        connection.end();
    },

    sayHelloInSpanish: function () {
        return "Hola";
    }
};