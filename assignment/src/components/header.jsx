import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import assignment1 from "../pages/assignment1";
const Header = () => {
  return (
    <Router>
      <div>
        <header className="bg-gray-700 p-4 text-black">
          <h1 className="text-2xl font-bold bg-gray-700">
            Assignment - 2 HTML to React
          </h1>
          <h1 className="text-2xl font-bold">Assignment - 3 Landing Page</h1>
          <h1 className="text-2xl font-bold">Assignment - 4 Contact Us</h1>
          
          <a href="/assignment">Assignment 1</a>
        </header>
      </div>
    </Router>
  );
};

export default Header;
