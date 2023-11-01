import React from "react";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="hero-main">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btns">
            <button>Shop Now</button>
            <button className="btn-2">Category</button>
          </div>
          <div className="hero-shopping">
            <p>Also Available On</p>
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
        <div className="hero-img">
          <img src="/images/shoe_image.png" alt="shoe_image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
