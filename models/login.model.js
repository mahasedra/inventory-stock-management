var mysqlConn = require('../config/db.config');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./data');

login = function (user, result) {
    mysqlConn.query("SELECT id FROM users WHERE name=? AND password=? ", [user.username, user.password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            localStorage.setItem('user', res[0].id);
            result(null, res);
        }
    });
};


module.exports = login
