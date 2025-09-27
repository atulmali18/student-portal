import React from "react";

const Header = () => {
  return (
    <section className="bg-light text-dark text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Student Dashboard</h1>
        <p className="lead mt-3">
          Manage your courses, assignments, and progress all in one place.
        </p>
        <a href="#ads" className="btn btn-primary btn-lg mt-4">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Header;
