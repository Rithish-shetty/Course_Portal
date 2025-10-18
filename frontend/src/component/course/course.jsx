import React from 'react';
import { Link } from 'react-router-dom';
import './course.css';
import bca from '../../assets/bca.webp';

const CourseCard = (props) => {
  return (
    <div className="course-card">
      <img src={bca} alt="BCA" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-description">{props.description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/courseDetailPage/${props.id}`} className="card-button">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;