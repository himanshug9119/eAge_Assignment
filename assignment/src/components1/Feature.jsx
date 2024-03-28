import React from "react";
import  { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import "swiper/css/bundle";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Pagination, Keyboard]);
const Features = () => {
  return (
    <section className="">
      <div className="container">
        <img
          src="/featurehead.png"
          alt=""
          width="100px"
          className="img-fluid mb-3"
        />
        <h2 className="mt-3 mb-4 text-3xl font-semibold">
          Simply English making your <br />
          communication skills your greatest asset
        </h2>
        <h5 className="mt-3 mb-4 text-xl font-semibold">
          Your Language Coach: Elevate speaking, writing, and interview skills
          seamlessly.
        </h5>
        <h1 className="abtus">App Features</h1>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop
          speed={1000}
          keyboard
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="custom-swiper"
        >
          <SwiperSlide>
            <div className="row d-flex align-items-center pb-10">
              <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mb-2">
                <img
                  src="/Guideprompts.png"
                  alt="app-img"
                  width="48.2%"
                  className="img-fluid rounded h-100"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2 ">
                <div>
                  <h2 className="featurehead">Guided Learning Prompts</h2>
                  <p>
                    Let our Guided Learning Prompts be your personalized
                    language coach. Tailored to your proficiency, these prompts
                    not only refine your English skills but also provide
                    structured lessons, making learning on SimplyEnglish a
                    breeze.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row d-flex align-items-center pb-10">
              <div className="col-lg-6 col-md-6 col-12 mt-2 text-center mb-2">
                <img
                  src="/voice.png"
                  alt="app-img"
                  width="48.2%"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2 ">
                <div>
                  <h2 className="featurehead">Voice Recognition</h2>
                  <p>
                    Speak your questions into our SimplyEnglish app and receive
                    instant answers! Our Voice Recognition feature not only
                    enhances your spoken English but also allows you to
                    effortlessly inquire about anything, eliminating the need
                    for typing.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row d-flex align-items-center pb-10">
              <div className="col-lg-6 col-md-6 col-12 text-center mt-2 mb-2">
                <img
                  src="/voiceenabled.png"
                  width="48%"
                  alt="app-img"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2 ">
                <div>
                  <h2 className="featurehead">Voice-Enabled Learning</h2>
                  <p>
                    Immerse yourself in interactive learning with Voice-Enabled
                    Learning on SimplyEnglish. Speak, listen, and practice
                    pronunciation effortlessly, taking your language skills to
                    new heights with just your voice.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row d-flex align-items-center pb-10">
              <div className="col-lg-6 col-md-6 col-12  text-center mt-2 mb-2">
                <img
                  src="/chathistory.png"
                  width="48.2%"
                  alt="app-img"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2 ">
                <div>
                  <h2 className="featurehead">Chat History</h2>
                  <p>
                    No need to worry about forgetting lessons—SimplyEnglish's
                    Chat History feature keeps track of your progress. Revisit
                    and review your personalized chat log to stay organized and
                    motivated throughout your English learning journey.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row d-flex align-items-center pb-10">
              <div className="col-lg-6 col-md-6 col-12 text-center mt-2 mb-2">
                <img
                  src="/askanything.png"
                  width="48.2%"
                  alt="app-img"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
                <div>
                  <h2 className="featurehead">Ask Anything</h2>
                  <p>
                    With our "Ask Anything" feature, speaking is all you need to
                    do. Simply use your voice to inquire about language nuances,
                    exam strategies, or any English-related queries, and receive
                    instant and accurate responses on SimplyEnglish.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
