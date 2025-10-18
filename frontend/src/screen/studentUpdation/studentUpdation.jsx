import React, { useEffect, useState } from 'react';
import './studentUpdation.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentUpdation = () => {
  // Semester states
  const [sem1, setSem1] = useState({ S1I1: '', S1I2: '', S1cgpa: '', S1sgpa: '' });
  const [sem2, setSem2] = useState({ S2I1: '', S2I2: '', S2cgpa: '', S2sgpa: '' });
  const [sem3, setSem3] = useState({ S3I1: '', S3I2: '', S3cgpa: '', S3sgpa: '' });
  const [sem4, setSem4] = useState({ S4I1: '', S4I2: '', S4cgpa: '', S4sgpa: '' });
  const [sem5, setSem5] = useState({ S5I1: '', S5I2: '', S5cgpa: '', S5sgpa: '' });
  const [sem6, setSem6] = useState({ S6I1: '', S6I2: '', S6cgpa: '', S6sgpa: '' });
  const [id1 , setId] = useState()

  const {id} = useParams()

  useEffect(() => {
        axios.get(`https://course-portal-1-schk.onrender.com/studentUpdation/${id}`)
        .then(response => {
            setId(response.data._id)

            const student = response.data;
            setFormData({
                studentName: student.studentName,
                registerNumber: student.registerNumber,
                courseName: student.courseName,
                currentYear: student.currentYear,
                batchNumber: student.batchNumber,
            });
            setSem1({
                S1I1: student.S1I1 || '',
                S1I2: student.S1I2 || '',   
                S1cgpa: student.S1cgpa || '',
                S1sgpa: student.S1sgpa || '',
            });
            setSem2({
                S2I1: student.S2I1 || '',
                S2I2: student.S2I2 || '',   
                S2cgpa: student.S2cgpa || '',
                S2sgpa: student.S2sgpa || '',
            });
            setSem3({
                S3I1: student.S3I1 || '',
                S3I2: student.S3I2 || '',
                S3cgpa: student.S3cgpa || '',
                S3sgpa: student.S3sgpa || '',
            });
            setSem4({
                S4I1: student.S4I1 || '',
                S4I2: student.S4I2 || '',
                S4cgpa: student.S4cgpa || '',
                S4sgpa: student.S4sgpa || '',
            });
            setSem5({
                S5I1: student.S5I1 || '',
                S5I2: student.S5I2 || '',
                S5cgpa: student.S5cgpa || '',
                S5sgpa: student.S5sgpa || '',
            });
            setSem6({
                S6I1: student.S6I1 || '',
                S6I2: student.S6I2 || '',
                S6cgpa: student.S6cgpa || '',
                S6sgpa: student.S6sgpa || '',
            });
        })
        .catch(error => console.error("There was an error fetching the student data!", error));
    }, []);

  // Basic student info
  const [formData, setFormData] = useState({
    studentName: '',
    registerNumber: '',
    courseName: '',
    currentYear: '',
    batchNumber: '',
  });

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/studentUpdation/${id1}`, {
      ...formData,
      ...sem1,
      ...sem2,
      ...sem3,
      ...sem4,
      ...sem5,
      ...sem6,
    })
    .then(response => {
      console.log("Student updated successfully:", response.data);
      alert(`${formData.studentName} has been updated successfully!`);
    })
    .catch(error => {
      console.error("There was an error updating the student!", error);
      alert("Update failed. Please try again.");
    });
  };

  return (
    <div className="add-student-container">
      <h1>Update Student Details</h1>
      <form onSubmit={handleSubmit} className="add-student-form">

        {/* Student Basic Details */}
        <fieldset className="student-details-fieldset">
          <legend>Student Details</legend>
          <div className="student-info-inputs">

            <div className="form-group">
              <label>Student Name</label>
              <input
                type="text"
                placeholder={formData.studentName}
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Register Number</label>
              <input
                type="text"
                value={formData.registerNumber}
                onChange={(e) => setFormData({ ...formData, registerNumber: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Course Name</label>
              <input
                type="text"
                value={formData.courseName}
                onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Current Year</label>
              <select
                value={formData.currentYear}
                onChange={(e) => setFormData({ ...formData, currentYear: e.target.value })}
                required
              >
                <option value="" disabled>Select Year</option>
                <option value="year1">Year 1</option>
                <option value="year2">Year 2</option>
                <option value="year3">Year 3</option>
              </select>
            </div>

            <div className="form-group">
              <label>Batch Number</label>
              <select
                value={formData.batchNumber}
                onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
                required
              >
                <option value="" disabled>Select Batch</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={`b${i + 1}`}>Batch {i + 1}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* Semester Marks */}
        <fieldset>
          <legend>Semester Marks</legend>
          <div className="semesters-marks-grid">

            {/* Helper to make semester inputs */}
            {[1,2,3,4,5,6].map((sem) => {
              const semState = eval(`sem${sem}`);
              const setSemState = eval(`setSem${sem}`);
              return (
                <div className="semester-marks-group" key={sem}>
                  <h4>Semester {sem}</h4>
                  <div className="form-group">
                    <label>1st Internal Marks</label>
                    <input
                      type="number"
                      value={semState[`S${sem}I1`]}
                      onChange={(e) => setSemState({ ...semState, [`S${sem}I1`]: e.target.value })}
                      placeholder="Out of 25"
                    />
                  </div>

                  <div className="form-group">
                    <label>2nd Internal Marks</label>
                    <input
                      type="number"
                      value={semState[`S${sem}I2`]}
                      onChange={(e) => setSemState({ ...semState, [`S${sem}I2`]: e.target.value })}
                      placeholder="Out of 25"
                    />
                  </div>

                  <div className="form-group">
                    <label>SGPA</label>
                    <input
                      type="number"
                      value={semState[`S${sem}sgpa`]}
                      onChange={(e) => setSemState({ ...semState, [`S${sem}sgpa`]: e.target.value })}
                      placeholder="Out of 10"
                    />
                  </div>

                  <div className="form-group">
                    <label>CGPA</label>
                    <input
                      type="number"
                      value={semState[`S${sem}cgpa`]}
                      onChange={(e) => setSemState({ ...semState, [`S${sem}cgpa`]: e.target.value })}
                      placeholder="Out of 10"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>

        <button type="submit" className="submit-student-btn">Update Student</button>
      </form>
    </div>
  );
};

export default StudentUpdation;
