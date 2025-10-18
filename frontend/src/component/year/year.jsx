import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './year.css'; // We'll use a shared CSS file for all year pages

const Year = (props) => {
  // Create an array representing the 10 batches
  const batches = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="update-year-container">
      <h1>Update Student Records -  {props.yearName}</h1>
      <p className="page-description">
        Select the batch you wish to update for Semesters {props.sem}.
      </p>

      <div className="batch-grid">
        {batches.map(batchNum => (
          <Link
            key={batchNum}
            to={`/admin/updateStudent/updateStudentMain/${props.yearName}/b${batchNum}`}
            className="batch-button"
          >
            Batch {batchNum}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Year;