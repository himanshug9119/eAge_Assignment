import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import images
import benifitImage from "../assets2/benifit.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Transforming my communication skills, Pro Fit sharpened my professional edge, resulting in significant career advancements. The professional shaping approach of this program has truly been a game-changer.",
      author: "Rajesh Gupta, Senior Marketing Manager",
    },
    {
      text: "Undoubtedly a career game-changer, the enhanced confidence from Pro Fit propelled me into leadership roles that once seemed out of reach. The professional shaping approach has been instrumental in my success.",
      author: "Priya Sharma, Director of Operations",
    },
    {
      text: "With a personalized approach mapping my skills, Pro Fit unlocked my potential. Today, I lead with confidence, making a substantial impact in my professional journey, thanks to its professional shaping approach.",
      author: "Amit Patel, Human Resources Specialist",
    },
    {
      text: "Refining my business communication, the workshops in Pro Fit led to immediate results – clearer expressions, improved leadership, and career success beyond expectations. The professional shaping approach is evident in every aspect.",
      author: "Neha Kapoor, Financial Analyst",
    },
    {
      text: "The focus on leadership development in Pro Fit honed my skills, making me a more effective and influential leader in my organization. The professional shaping approach is the foundation of my career success.",
      author: "Vikram Singh, Senior Project Manager",
    },
    {
      text: "Emphasizing impactful communication, Pro Fit transformed me into a more compelling professional. The ripple effect elevated my image, fueling my career trajectory with a clear professional shaping approach. Thank you.",
      author: "Deepika Rao, Communications Manager",
    },
  ];

  return (
    <section className="py-12">
      <div className="containerbox">
        <div className="yestexthead">
          Yes—you can do it yourself! <br />
          But you never have to do it alone.
        </div>
        <div className="yestext">
          See what our customers have to say about eAge and unparalleled tech
          support.
        </div>
      </div>
      <div className="yestextbanner">
        <div className="containerbox">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="bestleftimg">
                <img className="img-fluid" src={benifitImage} alt="Benefit" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bxMainBnaner">
                <Swiper spaceBetween={30} slidesPerView={1} autoplay>
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="besttext">
                          {testimonial.text}
                          <br />
                          <br />
                          -{testimonial.author}
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
