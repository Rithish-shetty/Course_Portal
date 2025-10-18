import React, { useEffect, useState } from 'react';
import './announcements.css';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const AnnouncementsPage = () => {
  
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ date: '', text: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/getAnnouncements')
    .then(res => setAnnouncements(res.data) )
    .catch(err => console.log(err))
  } , [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAnnouncement.text || !newAnnouncement.date) {
      alert("Please fill in both the date and the announcement text.");
      return;
    }

    axios.post('http://localhost:3001/createAnnouncement', {
      date: newAnnouncement.date,
      announcement: newAnnouncement.text
    }).then(response => {
      console.log("Announcement posted:", response.data);
    }).catch(error => {
      console.error("There was an error posting the announcement!", error);
    });

    const newEntry = {
      id: Date.now(), // Use a timestamp for a unique ID
      ...newAnnouncement
    };
    setAnnouncements([newEntry, ...announcements]);
    setNewAnnouncement({ date: '', text: '' }); // Reset form
  };

const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteAnnouncement/${id}`)
      .then(() => {
        setAnnouncements(prev => prev.filter(ann => ann._id !== id));
      })
      .catch(err => console.error("Error deleting announcement:", err));
};


  return (
    <div className="announcements-container">
      <h1>Manage Announcements</h1>
      
      {/* Form to add a new announcement */}
      <div className="add-announcement-form">
        <h2>Create New Announcement</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={newAnnouncement.date} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Announcement</label>
            <textarea 
              id="text" 
              name="text" 
              rows="4" 
              value={newAnnouncement.text} 
              onChange={handleInputChange} 
              required 
              placeholder="Write your announcement here..."
            ></textarea>
          </div>
          <button type="submit" className="post-btn">Post Announcement</button>
        </form>
      </div>

      {/* List of existing announcements */}
      <div className="announcements-list">
        <h2>Posted Announcements</h2>
        {announcements.length > 0 ? (
          announcements.map(ann => (
            <div key={ann._id} className="announcement-item">
              <div className="announcement-content">
                <span className="announcement-date">{new Date(ann.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <p className="announcement-text">{ann.announcement}</p>
              </div>
              <button onClick={() => handleDelete(ann._id)} className="delete-btn">
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p>No announcements posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsPage;