const mongoose = require('mongoose');   

const model4 = new mongoose.Schema({
    date : String,
    announcement : String, 
});

const AnnouncementModel = mongoose.model('Announcement', model4);

module.exports = AnnouncementModel;

