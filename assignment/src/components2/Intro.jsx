import introimg from "../assets2/intro_12.png";
import Register from "./Register";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start">
      {/* Image */}
      <div className="col-md-7 relative">
        <img src={introimg} alt="" className="mb-4 rounded-lg w-full" />
        {/* Text */}
        <div className="textbox">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold">
            Pro Fit Program – Your Tailored Soft Skills Makeover for a
            Professional Upgrade!
          </h2>
          <p className="pt-3 text-xl md:text-xl lg:text-2xl">
            Elevate your professional prowess through tailored soft skills
            training, mastering business communication, confident speaking,
            strategic writing, critical thinking, and impactful leadership!
          </p>
        </div>
      </div>
      {/* Register Component */}
      <div className="flex flex-col justify-center items-start">
          <Register />
      </div>
    </div>
  );
};

export default Intro;
