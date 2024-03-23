import React from "react";
import benefit from "../assets/benefit.png";
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";
// import photo from "./assets/photo.png";

const Benefits = () => {
  return (
    <section className="benefit">
      <div className="container">
        <h1 className="abtus text-white">Key Benefits</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src={benefit1}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">24X7 English Tutor</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src={benefit2}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">Ask Questions Any Time</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-2 text-center">
            <img
              src={benefit3}
              alt="feature-img"
              width="180px"
              className="img-fluid rounded"
            />
            <h3 className="text-white mt-4">Progress Tracking</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
