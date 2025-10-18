const mongoose = require('mongoose');

const model2 = new mongoose.Schema({
    name: String,
    instructor: String,
    duration: String,
    schedule: String,
    prerequisites: String,
    courseCode: String,
    description: String,
    fullDescription: String
});

const CourseModel = mongoose.model('Course', model2);

module.exports = CourseModel;