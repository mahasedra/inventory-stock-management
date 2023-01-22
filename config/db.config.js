'user strict';

const mysql = require('mysql');

//local mysql db connection
const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_stock_db'
});
mysqlConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = mysqlConn;