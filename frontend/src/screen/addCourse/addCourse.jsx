import React, { useState } from 'react';
import './addCourse.css';
import axios from 'axios';

const AddCoursePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    fullDescription: '',
    courseCode: '',
    instructor: '',
    duration: '',
    schedule: '',
    prerequisites: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://course-portal-1-schk.onrender.com/createCourse', formData)
    console.log("New Course Data:", formData);
    alert(`Course '${formData.courseName}' has been added successfully!`);
    // Reset form
    setFormData({
      name: '', description: '', fullDescription: '', courseCode: '',
      instructor: '', duration: '', schedule: '', prerequisites: ''
    });
  };

  return (
    <div className="add-course-container">
      <h1>Add New Course</h1>
      <form onSubmit={handleSubmit} className="add-course-form">
        <div className="form-left-section">
          <div className="form-group">
            <label htmlFor="name">Course Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Short Description</label>
            <textarea id="description" name="description" rows="3" value={formData.description} onChange={handleInputChange} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fullDescription">Full Description</label>
            <textarea id="fullDescription" name="fullDescription" rows="6" value={formData.fullDescription} onChange={handleInputChange} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="courseCode">Course Code</label>
            <input type="text" id="courseCode" name="courseCode" value={formData.courseCode} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-right-section">
          <div className="form-group">
            <label htmlFor="instructor">Instructor</label>
            <input type="text" id="instructor" name="instructor" value={formData.instructor} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} placeholder="e.g., 3 Years" required />
          </div>
          <div className="form-group">
            <label htmlFor="schedule">Scheduled for</label>
            <input type="text" id="schedule" name="schedule" value={formData.schedule} onChange={handleInputChange} placeholder="e.g., oct 5 2025" required />
          </div>
          <div className="form-group">
            <label htmlFor="prerequisites">Prerequisites</label>
            <input type="text" id="prerequisites" name="prerequisites" value={formData.prerequisites} onChange={handleInputChange} defaultValue="None" />
          </div>
        </div>
        <div className="form-full-width">
          <button type="submit" className="submit-course-btn">Add Course</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoursePage;