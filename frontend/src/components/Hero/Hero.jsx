import React from "react";
import "./Hero.css";
import Crypto from "../../assets/hero-img.png";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Hero = () => {
//   const history = useHistory();
const navigate = useNavigate();


  const handleButtonClick = () => {
    // Redirect to another component or route
    // history.push("/");
    navigate('gainers')
  };

  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>With Our Platform</p>
          <h2>Discover  Top 20 Gainers of Today !</h2>
          <p>Buy, Sell, and store the stocks</p>
          <div className="input-container">
            <button className="btn" onClick={handleButtonClick}>
              See 20 Top Stocks
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
