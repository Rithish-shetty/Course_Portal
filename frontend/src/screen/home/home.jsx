import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaUserGraduate, FaQuestionCircle, FaBullhorn } from 'react-icons/fa'; // Importing icons
import Header from '../../component/header/header';
import Navigation from '../../component/navigation/navigation';
import axios from 'axios';

const Home = () => {
  const [announcements , setAnnouncements] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getAnnouncements')
    .then(res => setAnnouncements(res.data) )
    .catch(err => console.log(err))
  } , [])

  return (
    <div>
        <Header to="/adminLogin" buttonName = {"Admin Panel"} />
        <Navigation />
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome, Student!</h1>
        <p>Your central hub for course registration, academic schedules, and university announcements.</p>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/browse" className="action-card">
            <FaBookOpen size={40} />
            <h3>Browse Courses</h3>
            <p>Explore the full catalog of available courses for the new semester.</p>
          </Link>
          <Link to="/support" className="action-card">
            <FaQuestionCircle size={40} />
            <h3>Student Support</h3>
            <p>Contact your academic advisor or access the university help desk resources.</p>
          </Link>
          <Link to="/events" className="action-card">
            <FaBullhorn size={40} />
            <h3>Campus Events</h3>
            <p>Discover upcoming workshops, seminars, and cultural events at the university.</p>
          </Link>
          <Link to="/studentLogin" className="action-card">
            <FaUserGraduate size={40} />
            <h3>Academic Profile</h3>
            <p>Access your student details, grades, and academic history.</p>
          </Link>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcements">
        <h2>Latest Announcements</h2>
        <ul className="announcement-list">
          {announcements.map((item, index) => (
            <li key={index}>
              <span className="date">{item.date}</span>
              <p className="text">{item.announcement}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}

export default Home;