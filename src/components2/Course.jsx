import React from "react";
import courseicon1 from "../assets2/courseicon1.png";
import courseicon2 from "../assets2/courseicon2.png";
import courseicon3 from "../assets2/courseicon3.png";

const Course = () => {
  return (
    <section>
      <div className="containerbox">
        <div className="yestexthead">Who this course is for?</div>
      </div>
      <div className="courseboxbbaner">
        <div className="containerbox">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <div className="courseBox">
                <img
                  className="img-fluid"
                  src={courseicon1}
                  alt="Course Icon 1"
                />
                <div className="coursetext">
                  Career Professionals: Pro Fit is tailored for career-driven
                  individuals seeking to enhance their communication skills,
                  leadership abilities, and overall professional image for
                  accelerated career growth.
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="courseBox">
                <img
                  className="img-fluid"
                  src={courseicon2}
                  alt="Course Icon 2"
                />
                <div className="coursetext">
                  Aspiring Leaders: Geared towards emerging leaders, Pro Fit
                  empowers individuals to shape a compelling leadership persona,
                  communicate with impact, and drive successful team
                  collaborations.
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="courseBox">
                <img
                  className="img-fluid"
                  src={courseicon3}
                  alt="Course Icon 3"
                />
                <div className="coursetext">
                  Communication Enthusiasts: Whether you're an experienced
                  professional or a newcomer, Pro Fit caters to those passionate
                  about refining their communication skills, boosting
                  confidence, and excelling in various professional aspects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
