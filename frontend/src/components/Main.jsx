import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import Learn from "./Learn/Learn";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Learn />
      <Footer />
    </div>
  );
};

export default Main;
