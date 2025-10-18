const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const StudentModel = require('./model/model1');
const CourseModel = require('./model/model2');
const EventModel = require('./model/model3');
const AnnouncementModel = require('./model/model4');
const SupportModel = require('./model/model5');
const RegistrationModel = require('./model/model6');
const AdminLoginModel = require('./model/model7');

const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Portal')


//this is for creating student
app.post('/createUser', (req, res) => {
    StudentModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

//this one is for creating courses
app.post('/createCourse', (req, res) => {
    CourseModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/createEvent', (req, res) => {
    EventModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/createAnnouncement', (req, res) => {
    AnnouncementModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/createSupportTicket', (req, res) => {
    SupportModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/createRegistration', (req, res) => {
    RegistrationModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/getStudents/:year/:batch', (req, res) => {
    const year = req.params.year;
    const batch = req.params.batch;
    console.log(year, batch);
    StudentModel.find({ currentYear: year, batchNumber: batch })
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

app.get('/studentUpdation/:id', (req, res) => {
    const id = req.params.id;
    StudentModel.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

app.put('/studentUpdation/:id', (req, res) => {
    const id = req.params.id;
    StudentModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

app.get('/getCourse' , (req,res) => {
    CourseModel.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/courseUpdation/:id', (req, res) => {
    const id = req.params.id;
    CourseModel.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

app.put('/courseUpdation/:id', (req, res) => {
    const id = req.params.id;
    CourseModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

app.get('/getAnnouncements' , (req,res) => {
    AnnouncementModel.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/deleteAnnouncement/:id' , (req,res) => {
    const id = req.params.id
    AnnouncementModel.findByIdAndDelete(id)
        .then(() => res.json({ message: "Announcement deleted successfully" }))
        .catch(err => res.status(500).json({ error: err.message }));
})

app.get('/getTicket' , (req,res) => {
    SupportModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.delete('/deleteTicket/:id' , (req,res) => {
    const id = req.params.id;
    SupportModel.findByIdAndDelete(id)
    .then(() => res.json({message : "Ticked Marked as done successfully"}))
    .catch(err => res.json(err))
})

app.get('/getForm' , (req , res) => {
    RegistrationModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.delete('/deleteform/:id' , (req,res) => {
    const id = req.params.id;
    RegistrationModel.findByIdAndDelete(id)
    .then(() => res.json({message : "Deleted successfully"}))
    .catch(err => res.json(err))
})

app.get('/getEvents' , (req,res) => {
    EventModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/getCourse2/:id' , (req,res) => {
    const id = req.params.id
    CourseModel.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/adminLogin' , (req,res) => {
   console.log(req.body , "reqbody of login")
    AdminLoginModel.findOne(req.body)
    .then(user => {
        console.log(user)
        if(user){
            if(user.password === req.body.password){
                res.json("success")
            }
            else{
                res.json("mismatch")
            }
        }
        else{
                res.json("not registered")
        }
    })
})

app.post('/studentLogin' , (req,res) => {
   console.log(req.body , "reqbody of studentLogin")
    StudentModel.findOne({studentName : req.body.name})
    .then(user => {
        console.log(user)
        if(user){
            if(user.registerNumber === req.body.reg){
                res.json("success")
            }
            else{
                res.json("mismatch")
            }
        }
        else{
                res.json("not registered")
        }
    })
})

app.get('/getStudent/:reg' , (req , res) => {
    const reg = req.params.reg;
    StudentModel.findOne({registerNumber : reg})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
