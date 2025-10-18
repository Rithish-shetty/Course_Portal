const mongoose = require('mongoose');

const model1 = new mongoose.Schema({
    studentName: String,
    registerNumber: String,
    courseName: String,
    batchNumber: String,
    currentYear: String,
    S1t1: Number,
    S1t2: Number,
    S1sgpa: Number, 
    S1cgpa: Number,
    S2t1: Number,
    S2t2: Number,
    S2sgpa: Number, 
    S2cgpa: Number,
    S3t1: Number,
    S3t2: Number,
    S3sgpa: Number, 
    S3cgpa: Number,
    S4t1: Number,
    S4t2: Number,
    S4sgpa: Number,
    S4cgpa: Number,
    S5t1: Number,
    S5t2: Number,
    S5sgpa: Number,
    S5cgpa: Number,
    S6t1: Number,
    S6t2: Number,
    S6sgpa: Number,
    S6cgpa: Number
});

const StudentModel = mongoose.model('Student', model1);

module.exports = StudentModel;