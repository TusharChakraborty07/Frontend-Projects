import React from "react";
import "./style/Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <main className="hero">
        <div className="hero-contain">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secoendary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>

            <div className="brands-icons">
              <img src="src/assets/flipkart.png" alt="flipkart_logo" />
              <img src="src/assets/amazon.png" alt="amazon_logo " />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="src/assets/shoe_image.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
