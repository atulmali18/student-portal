import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: "Welcome to the Student Dashboard! Check out the latest updates."
    };
  }

  render() {
    return (
      <div className="container my-4">
        <div className="alert alert-info" role="alert">
          {this.state.announcement}
        </div>
      </div>
    );
  }
}

export default Announcement;
