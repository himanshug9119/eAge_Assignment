import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 p-20 bg-gray-100 relative">
      {/* Profiles Section */}
      <div className="absolute right-4 bottom-4 flex flex-col gap-4 lg:flex-row lg:bottom-auto lg:right-auto lg:top-4">
        <h2 className="text-2xl mb-4 font-bold lg:mb-0">Profiles</h2>
        <div className="flex flex-wrap gap-4">
          <ProfileLink
            link="https://leetcode.com/himanshug9119/"
            icon="fa-leetcode"
            platform="LeetCode"
            size="md"
          />
          <ProfileLink
            link="https://www.geeksforgeeks.org/author/himanshug9119/"
            icon="fa-code"
            platform="GeeksforGeeks"
            size="md"
          />
          <ProfileLink
            link="https://codeforces.com/profile/himanshug9119/"
            icon="fa-codeforces"
            platform="Codeforces"
            size="md"
          />
          <ProfileLink
            link="https://www.instagram.com/himanshug9119/"
            icon="fa-instagram"
            platform="Instagram"
            size="md"
          />
          <ProfileLink
            link="https://www.linkedin.com/in/himanshug9119/"
            icon="fa-linkedin"
            platform="LinkedIn"
            size="md"
          />
          <ProfileLink
            link="https://twitter.com/himanshug9119/"
            icon="fa-twitter"
            platform="Twitter"
            size="md"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileLink = ({ link, icon, platform, size }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 py-3 text-gray-800 bg-white rounded-md shadow-md hover:bg-gray-700 transition duration-300 ${
        size === "md" ? "text-xl" : "text-2xl"
      }`}
    >
      {/* <i className={`fab ${icon} mr-3`}></i> */}
      <span className={`${size === "md" ? "text-lg" : "text-xl"} font-medium`}>
        {platform}
      </span>
    </a>
  );
};

export default Footer;
