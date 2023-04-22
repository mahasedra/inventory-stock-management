const userLog = require("../models/user-log.model");



//get all products from db
exports.findAll = (req, res) => {
    userLog.findAll((err, results) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving products"
            });
        }
        res.render('user-log', {
            title: 'Mini Market',
            data: results
        });
    });
};