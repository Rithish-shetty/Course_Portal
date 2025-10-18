import React from 'react';
import { Link } from 'react-router-dom';
import './updateStudent.css';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

const UpdateStudentPage = () => {
  return (
    <div className="update-student-container">
      <h1>Update Student Records</h1>
      <p className="page-description">
        First, find the student by their register number and then select the academic year you wish to update.
      </p>

      {/* Search Bar */}
      <div className="student-search-bar">
        <input type="text" placeholder="Enter Student Register Number..." />
        <button>
          <FaSearch /> Search
        </button>
      </div>

      {/* Year Navigation */}
      <div className="year-navigation">
        <h2>Select Academic Year</h2>
        <div className="year-buttons-grid">
          <Link to="/admin/updateStudent/year1" className="year-button">
            <div>
              <h3>Year 1</h3>
              <p>Update Semesters 1 & 2</p>
            </div>
            <FaArrowRight />
          </Link>

          <Link to="/admin/updateStudent/year2" className="year-button">
            <div>
              <h3>Year 2</h3>
              <p>Update Semesters 3 & 4</p>
            </div>
            <FaArrowRight />
          </Link>

          <Link to="/admin/updateStudent/year3" className="year-button">
            <div>
              <h3>Year 3</h3>
              <p>Update Semesters 5 & 6</p>
            </div>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudentPage;