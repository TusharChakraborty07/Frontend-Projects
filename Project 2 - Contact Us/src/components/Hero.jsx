import React from "react";
import "./style/Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="main">
        <div className="top">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>

        <div className="bottom">
          <div className="support">
            
            <div className="btns">
              <button>
                {" "}
                <img src="src/assets/ic_outline-message.svg" alt="" />
                VIA SUPPORT CHAT
              </button>
              <button>
                <img src="src/assets/ic_outline-message.svg" alt="" />
                VIA CALL
              </button>
            </div>

            <div className="via-email">
              <button>
                <img src="src/assets/ic_outline-message.svg" alt="" />
                VIA EMAIL FROM
              </button>
            </div>

            <div className="form"></div>
          </div>
          <div className="hero-img">
            <img src="src/assets/Service 24_7-pana 1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
