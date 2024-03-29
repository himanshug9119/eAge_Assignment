import React from "react";
import { Link } from "react-router-dom";

const AvilSection = () => {
  return (
    <section className="avilorangeBox">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
            <div className="avilimages">
              <img
                src="/Notconv.jpg"
                alt="Not convinced yet?"
                className="img-fluid p-0"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aviltextbox">
              <div className="nottext text-5xl font-semibold text-white uppercase">
                Not convinced Yet?
              </div>
              <div className="trytext text-3xl font-medium text-white">
                Try a free demo
              </div>
              <Link to="/register">
                <button className="btnNow mt-4 px-6 py-2">Register Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvilSection;
