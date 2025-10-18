const mongoose = require('mongoose');

const model5 = new mongoose.Schema({
    category: String,
    subject: String,
    description: String,
});

const SupportModel = mongoose.model('Support', model5);

module.exports = SupportModel;