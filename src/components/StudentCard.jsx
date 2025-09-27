import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentCard.css'; // custom styles

const StudentCard = ({ name, rollNo, course, batch }) => {
  return (
    <div className="card student-card shadow-lg mb-4">
      <div className="card-body">
        <h5 className="card-title text-primary">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Roll No: {rollNo}</h6>
        <p className="card-text">
          <strong>Course:</strong> {course} <br />
          <strong>Batch:</strong> {batch}
        </p>
        <a href="#" className="btn btn-outline-primary btn-sm">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default StudentCard;
