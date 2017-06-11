let database = require('./config/database');

let UserModel = database.import("./models/UserModel");


module.exports = function (isForced) {

    UserModel.sync({force: isForced});

};