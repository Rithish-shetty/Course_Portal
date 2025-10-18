import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './courseDetailPage.css';
import bca from '../../assets/bca.webp';
import axios from 'axios';

const CourseDetailPage = () => {

  const [data , setData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://course-portal-1-schk.onrender.com/getCourse2/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [id])

  if (!data) {
    return (
      <div className="course-detail-container">
        <h1>Course Not Found</h1>
        <p>The course you are looking for does not exist or is currently unavailable.</p>
        <Link to="/browse" className="back-link">← Back to All Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <Link to="/browse" className="back-link">← Back to All Courses</Link>
      <div className="course-header">
        <h1>{data.name}</h1>
      </div>
      <div className="course-layout">
        <div className="course-main-content">
          <img src={bca} alt="Course img" className="course-main-image" />
          <h2>Full Course Description</h2>
          <p>{data.fullDescription}</p>
        </div>
        <aside className="course-sidebar">
          <div className="info-box">
            <h3>Course Information</h3>
            <ul>
              <li><strong>Course Code:</strong> {data.courseCode}</li>
              <li><strong>Instructor:</strong> {data.instructor}</li>
              <li><strong>Duration:</strong> {data.duration}</li>
              <li><strong>Scheduled for:</strong> {data.schedule}</li>
              <li><strong>Prerequisites:</strong> {data.instructor}</li>
            </ul>
            <Link to={`/form/${data._id}`} className="register-button">Register for this Course</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetailPage;

/* props:
name , description , code , instructor , duration , schedule , prerequisites
*/