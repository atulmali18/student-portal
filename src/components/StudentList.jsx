import React, { Component } from "react";
import StudentCard from "./StudentCard";
import 'bootstrap/dist/css/bootstrap.min.css';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "Atul Mali", rollNo: "101", course: "MERN", batch: "2025" },
        { name: "Nikhil Mali", rollNo: "102", course: "Python", batch: "2024" },
        { name: "Aman Verma", rollNo: "103", course: "Java", batch: "2025" },
        { name: "Om Patil", rollNo: "104", course: "React", batch: "2024" },
      ],
    };
  }

  render() {
    return (
      <div className="container my-5">
        <h2 className="mb-4 text-center text-secondary">Student List</h2>
        <div className="row">
          {this.state.students.map((student, index) => (
            <div className="col-md-6" key={index}>
              <StudentCard
                name={student.name}
                rollNo={student.rollNo}
                course={student.course}
                batch={student.batch}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
