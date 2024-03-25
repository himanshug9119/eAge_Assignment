import React from "react";
import signup1 from "../assets/signup1.png";
import learn1 from "../assets/learn1.png";
import prompt1 from "../assets/prompt1.png";
import ask1 from "../assets/ask1.png";
import review1 from "../assets/review1.png";
import watchvideo from "../assets/watchvideo.png";
import howitsworks from "../assets/howitsworks.png";

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
                  src={signup1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Sign Up</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src={learn1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Choose what you would like to learn</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src={prompt1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Leverage the guided prompts</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src={ask1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Type your own prompts to ask anything</p>
              </li>
              <li className="flex flex-row align-items-center">
                <img
                  src={review1}
                  alt=""
                  className="img-fluid mr-3"
                  width="69px"
                />
                <p>Review chat history</p>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <img src={watchvideo} alt="" className="img-fluid" width="50%" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-2 text-center">
            <img
              src={howitsworks}
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
