import React from "react";

const HowItWorks = () => {
  return (
    <section className="simplyenglish">
      <div className="container">
        <h1 className="abtus">How it Works</h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-12 mt-2">
            <ul>
              <li className="flex flex-row align-items-center">
                <img
                  src="/signup1.png"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Sign Up</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src="/learn1.png"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Choose what you would like to learn</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src="/prompt1.png"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Leverage the guided prompts</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src="/ask1.png"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Type your own prompts to ask anything</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src="/review1.png"
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Review chat history</p>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <img
                src="/watchvideo.png"
                alt=""
                className="img-fluid"
                width="50%"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-2 text-center">
            <img
              src="/howitsworks.png"
              alt="feature-img"
              width="85%"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
