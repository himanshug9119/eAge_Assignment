import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-500 p-2">
      {/* Profiles Section */}
      <div className="flex  flex-row justify-between md:flex-col">
        <div className="flex flex-wrap gap-4 justify-between">
          <ProfileLink
            link="https://leetcode.com/himanshug9119/"
            icon="fa-leetcode"
            platform="LeetCode"
          />
          <ProfileLink
            link="https://www.geeksforgeeks.org/author/himanshug9119/"
            icon="fa-code"
            platform="GeeksforGeeks"
          />
          <ProfileLink
            link="https://codeforces.com/profile/himanshug9119/"
            icon="fa-codeforces"
            platform="Codeforces"
          />
          <ProfileLink
            link="https://www.instagram.com/himanshug9119/"
            icon="fa-instagram"
            platform="Instagram"
          />
          <ProfileLink
            link="https://www.linkedin.com/in/himanshug9119/"
            icon="fa-linkedin"
            platform="LinkedIn"
          />
          <ProfileLink
            link="https://twitter.com/himanshug9119/"
            icon="fa-twitter"
            platform="Twitter"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileLink = ({ link, icon, platform }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-4 py-2 text-xl border-2 border-gray-400 rounded-lg hover:bg-gray-400 hover:text-gray-800 transition-colors"
    >
      {platform}
    </a>
  );
};

export default Footer;
