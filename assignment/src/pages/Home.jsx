import React from "react";
import "../components/home.css";
import Header from "../components/header";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
