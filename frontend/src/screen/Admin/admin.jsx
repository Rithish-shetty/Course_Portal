import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
import {
  FaUserPlus,
  FaUserEdit,
  FaPlusCircle,
  FaEdit,
  FaCalendarPlus,
  FaBullhorn,
  FaQuestionCircle,
  FaEnvelope
} from 'react-icons/fa';
import Header from '../../component/header/header';
import Navigation from '../../component/navigation/navigation';

const AdminHomePage = () => {
  return (
    <div>
      <Header to="/" buttonName="Home Page" />
      {/* <Navigation /> */}
    <div className="admin-home-container">
      <h1>Admin Control Panel</h1>
      <div className="admin-grid">
        <Link to="/admin/addStudent" className="admin-card">
          <FaUserPlus size={40} />
          <h3>Add Student</h3>
          <p>Enroll a new student into the university database.</p>
        </Link>
        <Link to="/admin/updateStudent" className="admin-card">
          <FaUserEdit size={40} />
          <h3>Update Student</h3>
          <p>Modify details of an existing student.</p>
        </Link>
        <Link to="/admin/addCourse" className="admin-card">
          <FaPlusCircle size={40} />
          <h3>Add Course</h3>
          <p>Create a new course for the upcoming semester.</p>
        </Link>
        <Link to="/admin/displayCourse" className="admin-card">
          <FaEdit size={40} />
          <h3>Update Course</h3>
          <p>Edit details of an existing course or curriculum.</p>
        </Link>
        <Link to="/admin/addEvent" className="admin-card">
          <FaCalendarPlus size={40} />
          <h3>Add Event</h3>
          <p>Create and publish a new campus event.</p>
        </Link>
        <Link to="/admin/announcements" className="admin-card">
          <FaBullhorn size={40} />
          <h3>Announcements</h3>
          <p>Post important notices for all students.</p>
        </Link>
        <Link to="/admin/support" className="admin-card">
          <FaQuestionCircle size={40} />
          <h3>Student Support</h3>
          <p>View and respond to student support tickets.</p>
        </Link>
        <Link to="/admin/messages" className="admin-card">
          <FaEnvelope size={40} />
          <h3>Messages</h3>
          <p>Check messages sent through the contact form.</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AdminHomePage;