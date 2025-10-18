import React, { useState } from 'react';
import './addStudent.css';
import axios from 'axios';

const AddStudentPage = () => {
  const [sem1 , setSem1] = useState({ S1I1: '', S1I2: '', S1cgpa : '', S1sgpa :  '' });
  const [sem2 , setSem2] = useState({ S2I1: '', S2I2: '', S2cgpa : '', S2sgpa :  '' });
  const [sem3 , setSem3] = useState({ S3I1: '', S3I2: '', S3cgpa : '', S3sgpa :  '' });
  const [sem4 , setSem4] = useState({ S4I1: '', S4I2: '', S4cgpa : '', S4sgpa :  '' });
  const [sem5 , setSem5] = useState({ S5I1: '', S5I2: '', S5cgpa : '', S5sgpa :  '' });
  const [sem6 , setSem6] = useState({ S6I1: '', S6I2: '', S6cgpa : '', S6sgpa :  '' });


  const [formData, setFormData] = useState({
    studentName: '',
    registerNumber: '',
    courseName: '',
    currentYear: '',
    batchNumber: '',
  });
  



  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would use FormData to send the text fields and the imageFile to your server
    axios.post('http://localhost:3001/createUser', {
      studentName: formData.studentName,
      registerNumber: formData.registerNumber,
      courseName: formData.courseName,
      currentYear: formData.currentYear,
      batchNumber: formData.batchNumber,
      S1t1: sem1.S1I1,
      S1t2: sem1.S1I2,
      S1sgpa: sem1.S1sgpa,
      S1cgpa: sem1.S1cgpa,
      S2t1: sem2.S2I1,
      S2t2: sem2.S2I2,
      S2sgpa: sem2.S2sgpa,
      S2cgpa: sem2.S2cgpa,
      S3t1: sem3.S3I1,
      S3t2: sem3.S3I2,
      S3sgpa: sem3.S3sgpa,
      S3cgpa: sem3.S3cgpa,
      S4t1: sem4.S4I1,
      S4t2: sem4.S4I2,
      S4sgpa: sem4.S4sgpa,
      S4cgpa: sem4.S4cgpa,
      S5t1: sem5.S5I1,
      S5t2: sem5.S5I2,
      S5sgpa: sem5.S5sgpa,
      S5cgpa: sem5.S5cgpa,
      S6t1: sem6.S6I1,
      S6t2: sem6.S6I2,
      S6sgpa: sem6.S6sgpa,
      S6cgpa: sem6.S6cgpa
    })
    .then(response => {
      console.log('User created successfully:', response.data);
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSem1({...sem1, [e.target.name]: e.target.value});
    setSem2({...sem2, [e.target.name]: e.target.value});
    setSem3({...sem3, [e.target.name]: e.target.value});
    setSem4({...sem4, [e.target.name]: e.target.value});
    setSem5({...sem5, [e.target.name]: e.target.value});
    setSem6({...sem6, [e.target.name]: e.target.value});
    console.log("New Student Data:", formData);
    alert(`${formData.studentName} has been added successfully!`);
    
    // Reset form and image preview
    setFormData({
      studentName: '',
      registerNumber: '',
      courseName: '',
      currentYear: '',
      batchNumber: '',
    });
  };

  return (
    <div className="add-student-container">
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit} className="add-student-form">
        <fieldset className="student-details-fieldset">
          <legend>Student Details</legend>


          <div className="student-info-inputs">
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={
                e => setFormData({...formData , studentName : e.target.value})
              } required />
            </div>
            <div className="form-group">
              <label htmlFor="registerNumber">Register Number</label>
              <input type="text" id="registerNumber" name="registerNumber" value={formData.registerNumber} onChange={
                e => setFormData({...formData , registerNumber : e.target.value})
              } required />
            </div>
            <div className="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input type="text" id="courseName" name="courseName" value={formData.courseName} onChange={
                e => setFormData({...formData , courseName : e.target.value})
              } required />
            </div>
          </div>
        </fieldset>

        {/* ... (rest of the form for semester marks remains the same) ... */}
        <fieldset>
          <legend>Semester Marks</legend>
          <div className="semesters-marks-grid">

              <div  className="semester-marks-group">
                <h4>Semester 1</h4>
                <div className="form-group">
                  <label >1st Internal Marks</label>
                  <input
                    type="number"
                    id={`internals1`}
                    name="internals1"
                    value={sem1.S1I1}
                    onChange={(e) => setSem1({ ...sem1, S1I1: e.target.value })}
                    placeholder="Out of 25"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`index`}>2nd Internal Marks</label>
                  <input
                    type="number"
                    id={`internals`}
                    name="internals2"
                    value={sem1.S1I2}
                    onChange={(e) => setSem1({ ...sem1, S1I2: e.target.value })}
                    placeholder="Out of 25"
                  />
                  <div className="form-group">
                  <label htmlFor={`sgpa`}>SGPA</label>
                  <input
                    type="number"
                    id={`sgpa-`}
                    name="sgpa"
                    value={sem1.S1sgpa}
                    onChange={(e) => setSem1({...sem1 , S1sgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor={`cgpa`}>CGPA</label>
                  <input
                    type="number"
                    id={`cgpa-`}
                    name="cgpa"
                    value={sem1.S1cgpa}
                    onChange={(e) => setSem1({...sem1 , S1cgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                </div>
              </div>

              <div  className="semester-marks-group">
                <h4>Semester 2</h4>
                <div className="form-group">
                  <label >1st Internal Marks</label>
                  <input
                    type="number"
                    id={`internals1`}
                    name="internals1"
                    value={sem2.S2I1}
                    onChange={(e) => setSem2({...sem2 , S2I1 : e.target.value})}
                    placeholder="Out of 25"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`index`}>2nd Internal Marks</label>
                  <input
                    type="number"
                    id={`internals`}
                    name="internals2"
                    value={sem2.S2I2}
                    onChange={(e) => setSem2({...sem2 , S2I2 : e.target.value})}
                    placeholder="Out of 25"
                  />
                  <div className="form-group">
                  <label htmlFor={`sgpa`}>SGPA</label>
                  <input
                    type="number"
                    id={`sgpa-`}
                    name="sgpa"
                    value={sem2.S2sgpa}
                    onChange={(e) => setSem2({...sem2 , S2sgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor={`cgpa`}>CGPA</label>
                  <input
                    type="number"
                    id={`cgpa-`}
                    name="cgpa"
                    value={sem2.S2cgpa}
                    onChange={(e) => setSem2({...sem2 , S2cgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                </div>
              </div>

              <div  className="semester-marks-group">
                <h4>Semester 3</h4>
                <div className="form-group">
                  <label >1st Internal Marks</label>
                  <input
                    type="number"
                    id={`internals1`}
                    name="internals1"
                    value={sem3.S3I1}
                    onChange={(e) => setSem3({...sem3 , S3I1 : e.target.value})}
                    placeholder="Out of 25"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`index`}>2nd Internal Marks</label>
                  <input
                    type="number"
                    id={`internals`}
                    name="internals2"
                    value={sem3.S3I2}
                    onChange={(e) => setSem3({...sem3 , S3I2 : e.target.value})}
                    placeholder="Out of 25"
                  />
                  <div className="form-group">
                  <label htmlFor={`sgpa`}>SGPA</label>
                  <input
                    type="number"
                    id={`sgpa-`}
                    name="sgpa"
                    value={sem3.S3sgpa}
                    onChange={(e) => setSem3({...sem3 , S3sgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor={`cgpa`}>CGPA</label>
                  <input
                    type="number"
                    id={`cgpa-`}
                    name="cgpa"
                    value={sem3.S3cgpa}
                    onChange={(e) => setSem3({...sem3 , S3cgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                </div>
              </div>

              <div  className="semester-marks-group">
                <h4>Semester 4</h4>
                <div className="form-group">
                  <label >1st Internal Marks</label>
                  <input
                    type="number"
                    id={`internals1`}
                    name="internals1"
                    value={sem4.S4I1}
                    onChange={(e) => setSem4({...sem4 , S4I1 : e.target.value})}
                    placeholder="Out of 25"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`index`}>2nd Internal Marks</label>
                  <input
                    type="number"
                    id={`internals`}
                    name="internals2"
                    value={sem4.S4I2}
                    onChange={(e) => setSem4({...sem4 , S4I2 : e.target.value})}
                    placeholder="Out of 25"
                  />
                  <div className="form-group">
                  <label htmlFor={`sgpa`}>SGPA</label>
                  <input
                    type="number"
                    id={`sgpa-`}
                    name="sgpa"
                    value={sem4.S4sgpa}
                    onChange={(e) => setSem4({...sem4 , S4sgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor={`cgpa`}>CGPA</label>
                  <input
                    type="number"
                    id={`cgpa-`}
                    name="cgpa"
                    value={sem4.S4cgpa}
                    onChange={(e) => setSem4({...sem4 , S4cgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                </div>
              </div>

              <div  className="semester-marks-group">
                <h4>Semester 5</h4>
                <div className="form-group">
                  <label >1st Internal Marks</label>
                  <input
                    type="number"
                    id={`internals1`}
                    name="internals1"
                    value={sem5.S5I1}
                    onChange={(e) => setSem5({...sem5 , S5I1 : e.target.value})}
                    placeholder="Out of 25"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`index`}>2nd Internal Marks</label>
                  <input
                    type="number"
                    id={`internals`}
                    name="internals2"
                    value={sem5.S5I2}
                    onChange={(e) => setSem5({...sem5 , S5I2 : e.target.value})}
                    placeholder="Out of 25"
                  />
                  <div className="form-group">
                  <label htmlFor={`sgpa`}>SGPA</label>
                  <input
                    type="number"
                    id={`sgpa-`}
                    name="sgpa"
                    value={sem5.S5sgpa}
                    onChange={(e) => setSem5({...sem5 , S5sgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor={`cgpa`}>CGPA</label>
                  <input
                    type="number"
                    id={`cgpa-`}
                    name="cgpa"
                    value={sem5.S5cgpa}
                    onChange={(e) => setSem5({...sem5 , S5cgpa:e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                </div>
              </div>

              <div  className="semester-marks-group">
                <h4>Semester 6</h4>
                <div className="form-group">
                  <label >1st Internal Marks</label>
                  <input
                    type="number"
                    id={`internals1`}
                    name="internals1"
                    value={sem6.S6I1}
                    onChange={(e) => setSem6({...sem6 , S6I1 : e.target.value})}
                    placeholder="Out of 25"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`index`}>2nd Internal Marks</label>
                  <input
                    type="number"
                    id={`internals`}
                    name="internals2"
                    value={sem6.S6I2}
                    onChange={(e) => setSem6({...sem6 , S6I2 : e.target.value})}
                    placeholder="Out of 25"
                  />
                  <div className="form-group">
                  <label htmlFor={`sgpa`}>SGPA</label>
                  <input
                    type="number"
                    id={`sgpa-`}
                    name="sgpa"
                    value={sem1.S1sgpa}
                    onChange={(e) => setSem6({...sem6 , S6sgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor={`cgpa`}>CGPA</label>
                  <input
                    type="number"
                    id={`cgpa-`}
                    name="cgpa"
                    value={sem6.S6cgpa}
                    onChange={(e) => setSem6({...sem6 , S6cgpa : e.target.value})}
                    placeholder="Out of 10"
                  />
                </div>
                </div>
              </div>

          </div>
          {/* ## NEW DROPDOWN LISTS ## */}
            <div className="form-group">
              <label htmlFor="admissionYear">Current Year</label>
              <select id="admissionYear" name="currentYear" value={formData.currentYear} onChange={
                e => setFormData({...formData , currentYear : e.target.value})
              } required>
                <option value="" disabled>Select Year</option>
                <option value="year1">Year 1</option>
                <option value="year2">Year 2</option>
                <option value="year3">Year 3</option>                
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="batchNumber">Batch Number</label>
              <select id="batchNumber" name="batchNumber" value={formData.batchNumber} onChange={
                e => setFormData({...formData , batchNumber : e.target.value})
              } required>
                <option value="" disabled>Select Batch</option>
                <option value="b1">Batch 1</option>
                <option value="b2">Batch 2</option>
                <option value="b3">Batch 3</option>
                <option value="b4">Batch 4</option>
                <option value="b5">Batch 5</option>
                <option value="b6">Batch 6</option>
                <option value="b7">Batch 7</option>
                <option value="b8">Batch 8</option>
                <option value="b9">Batch 9</option>
                <option value="b10">Batch 10</option>
              </select>
            </div>
        </fieldset>
        
        <button type="submit" className="submit-student-btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentPage;