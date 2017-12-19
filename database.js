var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'hairb2b'
});

console.log(connection);

module.export = {connection: connection};