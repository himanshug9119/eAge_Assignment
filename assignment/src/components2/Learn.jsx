import React from "react";
const Learn = () => {
  return (
    <section className="py-12">
      <div className="containerbox">
        <div className="whylearnBanner">
          <h2 className="text-7xl font-normal mb-6 text-center">
            What you'll learn?
          </h2>
          <p className="learntext mb-4">
            Do you find it challenging to master the nuances of business
            communication in crucial situations such as interviews,
            presentations, or meetings?
          </p>
          <p className="learntext mb-4">
            Are nerves, anxiety, or language barriers hindering your ability to
            confidently speak and strategically write, impacting your
            professional image?
          </p>
          <p className="learntext mb-4">
            Do you aspire to lead, motivate, and inspire others with impactful
            words, shaping a distinguished leadership image?
          </p>
        </div>
        <div className="">
          <h2 className="learnheading2">
            If capturing attention in presentations with compelling delivery is
            a goal, then this program is tailored for you!
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <div>
                <img
                  className="img-fluid"
                  src="/Whatyoulearn.jpg"
                  alt="What you'll learn"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <ul className="whylearnlist">
                <li>
                  <span>Elevate</span> Professional image through mastery of
                  Business Communication for focused and engaging interactions.
                </li>
                <li>
                  <span>Enhance</span> Professional Etiquette to speak clearly,
                  ensuring a polished and confident image.
                </li>
                <li>
                  <span>Cultivate</span> Clarity in Interpersonal Skills for
                  seamless and impactful communication, bolstering leadership
                  confidence.
                </li>
                <li>
                  <span>Foster</span> Confident Team Collaboration through
                  effective communication, amplifying leaders' trustworthiness.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
