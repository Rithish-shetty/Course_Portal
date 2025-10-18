import React, { useState } from 'react';
import './addEvent.css';
import axios from 'axios';

const AddEventPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    scheduledDate: '',
    managers: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://course-portal-1-schk.onrender.com/createEvent', formData)
    console.log("New Event Data:", formData);
    alert(`Event '${formData.name}' has been created successfully!`);
    // Reset form
    setFormData({ name: '', scheduledDate: '', managers: '', description: '' });
  };

  return (
    <div className="add-event-container">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit} className="add-event-form">

        <div className="form-group">
          <label htmlFor="name">Event Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="scheduledDate">Scheduled Date</label>
          <input type="date" id="scheduledDate" name="scheduledDate" value={formData.scheduledDate} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="managers">Event Managers</label>
          <input type="text" id="managers" name="managers" value={formData.managers} onChange={handleInputChange} placeholder="e.g., Dr. Rithish Shetty" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Short Description</label>
          <textarea id="description" name="description" rows="4" value={formData.description} onChange={handleInputChange} required></textarea>
        </div>

        <button type="submit" className="submit-event-btn">Create Event</button>
      </form>
    </div>
  );
};

export default AddEventPage;