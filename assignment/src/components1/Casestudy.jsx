import React from "react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";

// Install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Keyboard, Autoplay]);

const Casestudy = () => {
  return (
    <section className="casestudy">
      <div className="container mt-5">
        <h1 className="abtus mt-4">Case Study</h1>
        <div className="row mt-5 mb-3">
          <div className="col-md-12">
            <Swiper
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              speed={1000}
              keyboard={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            >
              <SwiperSlide>
                <div className="col-sm-12 d-flex">
                  <div className="post-slide">
                    <div className="post-img">
                      <img
                        className="card-img-top"
                        src="/craft.png"
                        alt="Craft A+ Essays"
                      />
                    </div>
                    <div className="card-body post-content">
                      <h5 className="text-md mt-3 font-semibold">
                        Craft A+ Essays: Elevate your grades with Simply
                        English's writing expertise.
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-sm-12 d-flex">
                  <div className="post-slide">
                    <div className="post-img">
                      <img
                        className="card-img-top"
                        src="/communication.png"
                        alt="From Lines of Code to Lines of Communication"
                      />
                    </div>
                    <div className="card-body post-content">
                      <h5 className="text-md mt-3 font-semibold">
                        From Lines of Code to Lines of Communication: Simply
                        English Unleashes Your Potential
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-sm-12 d-flex">
                  <div className="post-slide">
                    <div className="post-img">
                      <img
                        className="card-img-top"
                        src="/speak.png"
                        alt="Speak with Heart"
                      />
                    </div>
                    <div className="card-body post-content">
                      <h5 className="text-md mt-3 font-semibold">
                        Speak with Heart: Simply English—Moms, speaking the
                        language of their children with ease
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-sm-12 d-flex">
                  <div className="post-slide">
                    <div className="post-img">
                      <img
                        className="card-img-top"
                        src="/powerful.jpeg"
                        alt="Powerful Vision, Persuasive Words"
                      />
                    </div>
                    <div className="card-body post-content">
                      <h5 className="text-md mt-3 font-semibold">
                        Powerful Vision, Persuasive Words: Simply English for
                        Business Leaders.
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
