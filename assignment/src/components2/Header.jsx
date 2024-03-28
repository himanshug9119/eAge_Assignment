import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 text-black mr-4">
      {/* Logo */}
      <div className="flex items-center mt-0 ml-4">
        {" "}
        {/* Adjusted margins here */}
        <img src="/logo.png" alt="Logo" className="w-30 h-15 img-fluid" />
      </div>

      {/* Email Address */}
      <a href="mailto:wecare@eagetutor.com" className="text-2xl font-normal">
        wecare@eagetutor.com
      </a>
    </div>
  );
};

export default Header;
