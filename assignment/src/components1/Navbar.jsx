import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const CustomNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" id="navbar">
      <div className="container">
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          className="ml-auto"
        />
        <Navbar.Collapse
          id="navbarSupportedContent"
          className="justify-content-end"
        >
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/aboutUs" className="nav-link">
                About Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/SimplyEnglish" className="nav-link">
                SimplyEnglish Web
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/blogs" className="nav-link border-right-0">
                Blogs
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
