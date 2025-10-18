const mongoose = require('mongoose');

const model6 = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    state : String,
    prereq : String
});

const RegistrationModel = mongoose.model('Registration', model6);

module.exports = RegistrationModel;


