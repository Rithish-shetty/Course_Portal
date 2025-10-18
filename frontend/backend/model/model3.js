const mongoose = require('mongoose');

const model3 = new mongoose.Schema({
    name: String,
    scheduledDate: Date,
    description: String,
    managers: String,
});

const EventModel = mongoose.model('Event', model3);

module.exports = EventModel;