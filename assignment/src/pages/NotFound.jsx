import React from "react";
import Header from "../components/header";
const NotFound = () => {
  return (

    <>
    <Header/>
    
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <img
            src="/notfound.jpg" 
            alt="404 Not Found"
            className="img-fluid mb-4"
          />
          <h1 className="text-danger">404 - Not Found!</h1>
          <p className="lead p-2 m-2 font-normal">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <a href="/" className="btn btn-success">
            Go to Home Page
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
