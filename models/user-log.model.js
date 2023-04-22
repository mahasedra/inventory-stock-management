
var mysqlConn = require('../config/db.config');
var userLog = {};
userLog.findAll = function (result) {
    mysqlConn.query("Select * from user_log", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = userLog;