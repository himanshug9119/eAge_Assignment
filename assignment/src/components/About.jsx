import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container bg-gray-300">
      <div className="image-container">
        <img src="/himanshu.jpg" alt="Your Name" className="profile-image" />
      </div>
      <div className="info-container ">
        <h1 className="title">Himanshu Gupta</h1>
        <p className="about-text">
          I possess strong problem-solving abilities. I am currently a pre-final
          year student pursuing Computer Science and Engineering at IIIT
          Vadodara International Campus in Diu. As a web developer, I have
          undertaken multiple projects. I am adept at quickly grasping new
          concepts and always eager to expand my knowledge.
        </p>
        <div className="projects-links mb-2 p-2">
          <h2 className=" font-normal">Explore Other Projects:</h2>
          <ul>
            <li>
              <a href="https://himanshu-estate.onrender.com/" target="_blank">
                Real Estate Project (Full Stack Project)
              </a>
            </li>
            <li>
              <a
                href="https://himanshug9119.github.io/Virtual-Lab-IIITV-ICD/"
                target="_blank"
              >
                IIIT Vadodara Virtual Lab
              </a>
            </li>
            <li>
              <a
                href="https://instasell-himanshug9119.vercel.app/"
                target="_blank"
              >
                Installsell Freelance FrontEnd Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
