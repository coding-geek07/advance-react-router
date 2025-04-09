import React from "react";
import { Link } from "react-router";

const ErrorElement = () => {
  return (
    <>
      <div className="container">
        <div>ErrorElement</div>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
};

export default ErrorElement;
