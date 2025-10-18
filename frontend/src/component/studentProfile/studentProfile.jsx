import React from 'react';
import './studentProfile.css';

const StudentProfile = (props) => {

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img  alt={'studentImg'} className="profile-image" />
        <div className="profile-details">
          <h1>{props.name}</h1>
          <p><strong>Register Number:</strong> {props.registerNumber}</p>
          <p><strong>Course:</strong> {props.courseName}</p>
        </div>
      </div>

      <div className="profile-body">
        <h2>Semester Performance</h2>
        <div className="semesters-grid">
            <div className="semester-card">
              <h3>Semester 1</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S1t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S1t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S1sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S1cgpa}</li>
              </ul>
            </div>
            <div className="semester-card">
              <h3>Semester 2</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S2t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S2t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S2sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S2cgpa}</li>
              </ul>
            </div>
            <div className="semester-card">
              <h3>Semester 3</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S3t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S3t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S3sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S3cgpa}</li>
              </ul>
            </div>
             <div className="semester-card">
              <h3>Semester 4</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S4t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S4t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S4sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S4cgpa}</li>
              </ul>
            </div>
             <div className="semester-card">
              <h3>Semester 4</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S4t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S4t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S4sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S4cgpa}</li>
              </ul>
            </div>
             <div className="semester-card">
              <h3>Semester 5</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S5t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S5t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S5sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S5cgpa}</li>
              </ul>
            </div>
             <div className="semester-card">
              <h3>Semester 6</h3>
              <ul>
                <li><strong>1st Internals:</strong> {props.S6t1} / 25</li>
                <li><strong>2nd Internals:</strong> {props.S6t2} / 25</li>
                <li className="gpa-highlight"><strong>SGPA:</strong> {props.S6sgpa}</li>
                <li className="gpa-highlight"><strong>CGPA:</strong> {props.S6cgpa}</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;