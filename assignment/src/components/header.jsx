import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link to="/assignment1" className="nav-link">
                Assignment - 1 HTML to React
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/assignment2" className="nav-link">
                Assignment - 2 Landing Page
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                href="https://drive.google.com/file/d/1KmvVL1p88eRVZsKjp2J1qEMhp_oEb1AB/view?usp=sharing"
                className="nav-link border-right-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume Drive Link
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
