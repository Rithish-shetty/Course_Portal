// src/pages/RegistrationPage.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './form.css';
import axios from 'axios';

const Form = () => {

  const [name , setName] = useState('');
  const [number , setNumber] = useState('');
  const [email , setEmail] = useState('');
  const [state , setState] = useState('');
  const [prereq , setPrereq] = useState(false);
  const [data , setData] = useState([]);

  const {id} = useParams();

  const navigate = useNavigate();

    useEffect(() => {
    axios.get(`http://localhost:3001/getCourse2/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [id])

  const handleSubmit = (e) => {
    axios.post('http://localhost:3001/createRegistration', {
      name: name,
      number: number,
      email: email,
      state: state,
      prereq: prereq
    }).then(response => {
      console.log("Registration successful:", response.data);
    }).catch(error => {
      console.error("There was an error submitting the registration!", error);
    });
    
    alert('form submitted successfully');
    e.preventDefault();
    navigate('/browse');
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.confirmPrerequisites) {
//       alert('Please confirm you have met the prerequisites.');
//       return;
//     }
//     alert(`Successfully submitted registration for ${course.name}!`);
//   };

//   if (!course) {
//     return (
//       <div className="registration-container">
//         <h1>Course Not Found</h1>
//         <Link to="/browse">← Go back to courses</Link>
//       </div>
//     );
//   }

  return (
    <div className="registration-container">
      <h1>Course Registration</h1>
      
      <div className="course-info-summary">
        <h2>You are registering for:</h2>
        <p><strong> {data.name} </strong> {data.courseCode}</p>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentId">Contact Number</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="semester">State</label>
          <select 
            id="semester" 
            name="semester" 
            value={state}
            onChange={e => setState(e.target.value)}
            required
          >
            <option value="">Select State</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="confirmPrerequisites"
            name="confirmPrerequisites"
            checked={prereq}
            onChange={e => setPrereq(e.target.checked)}
            required
          />
          <label htmlFor="confirmPrerequisites">
            I confirm that I have met the prerequisites for this course: <strong>({prereq ? 'true' : 'false'})</strong>
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Registration</button>
      </form>
    </div>
  );
};

export default Form;