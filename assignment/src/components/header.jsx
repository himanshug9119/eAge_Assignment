import React from "react";
const Header = () => {
  return (
    <div>
      <header className="bg-gray-700 p-4 text-black">
        <h1 className="text-2xl font-bold bg-gray-700">
          <a href="/assignment1">Assignment - 1 HTML to React</a>
        </h1>
        <h1 className="text-2xl font-bold">
          <a href="/assignment2">Assignment - 2 Landing Page</a>
        </h1>
        <h1 className="text-2xl font-bold">
          <a href="/assignment3">Assignment - 3 Contact Us</a>
        </h1>
      </header>
    </div>
  );
};

export default Header;
