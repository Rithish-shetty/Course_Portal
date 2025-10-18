const mongoose = require('mongoose');

const model7 = new mongoose.Schema({
    name: String,
    password : String,
});

const AdminLoginModel = mongoose.model('AdminLogin', model7);

module.exports = AdminLoginModel;


