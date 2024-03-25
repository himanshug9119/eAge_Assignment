import React from "react";
import benifitimg from "../assets2/benifiti.jpg";

const Benifit = () => {
  return (
    <div className="benifitmainbaaner">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="benifitimg">
            <img className="img-fluid" src={benifitimg} alt="Benefits" />
          </div>
        </div>
        <div className="w-full md:w-1/2 benifitboxbanner">
          <div className="benifitbox">
            <h3 className="benifithead text-white">Benefits</h3>
            <ul className="benifitlist">
              <li className="pt-4">
                Personalized Skill Mapping: Tailored learning paths for
                individual growth.
              </li>
              <li className="">
                Expert Guidance: Benefit from seasoned professionals' insights
                and expertise.
              </li>
              <li className="">
                Networking Opportunities: Connect with a diverse professional
                network.
              </li>
              <li className="">
                Measurable Impact: Track progress through quantifiable outcomes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
