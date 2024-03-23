import React from "react";
import { Navbar, Nav } from "react-bootstrap";

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
              <Nav.Link href="#" className="nav-link">
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">
                SimplyEnglish Web
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link border-right-0">
                Blogs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
