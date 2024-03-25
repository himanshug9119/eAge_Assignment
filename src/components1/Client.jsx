import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import "./YourCustomCss.css"; // Make sure to import your custom CSS file
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";
import test5 from "../assets/test5.png";
import test6 from "../assets/test6.png";

const ClientsSection = () => {
  const slides = [
    {
      name: "Arjun from Bangalore",
      image: test2,
      testimonial:
        "SimplyEnglish played a key role in my professional growth. The refined communication skills and insightful Guided Learning Prompts helped me secure a promotion. Grateful for the app's impact on my career!",
    },
    {
      name: "Priya from Mumbai",
      image: test1,
      testimonial:
        "Navigating Chat History on SimplyEnglish kept my learning organized and proved crucial for my important presentation preparation. Thanks to the app, I delivered with confidence and received positive feedback.",
    },
    {
      name: "Raj from Delhi",
      image: test4,
      testimonial:
        "SimplyEnglish's interactive learning was a game-changer for my business dealings. Personalized lessons and instant feedback through Voice-Enabled Learning significantly contributed to cracking a major business deal.",
    },
    {
      name: "Aisha from Hyderabad",
      image: test3,
      testimonial:
        "Ask Anything is my favorite feature on SimplyEnglish. It clarified my doubts during exam preparation, and the confidence gained through the app's unique features helped me clear my exam with flying colors.",
    },
    {
      name: "Vikram from Chennai",
      image: test5,
      testimonial:
        "As a content creator, SimplyEnglish was my go-to app for writing interactive website content. The fine-tuned language skills, courtesy of the app's features, made my content more engaging and impactful.",
    },
    {
      name: "Neha from Kolkata",
      image: test6,
      testimonial:
        "SimplyEnglish significantly impacted my exam preparation. The seamless Voice-Enabled Learning made practicing skills easy, and thanks to the app, I cleared my exam with confidence. Highly recommended!",
    },
  ];

  return (
    <section className="clients">
      <div className="container mt-5">
        <h1 className="abtus mt-4 mb-5">What our clients say</h1>
        <div className="row clienthead">
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
              autoplay={true}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="col-sm-12 d-flex">
                    <div className="testimonial">
                      <img src={slide.image} className="imgtest" alt="" />
                      <h5 className="mt-4">{slide.name}</h5>
                      <p className="description mt-4">"{slide.testimonial}"</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
