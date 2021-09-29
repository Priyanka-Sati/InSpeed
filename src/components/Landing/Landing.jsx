import React from "react";
import "./Landing.css";
import type from "./../../assets/type.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="landing-left">
        <h1 className="landing-header">Can you type...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
     className="type-image" src={type} alt="write" />
      </div>
    </div>
  );
};

export default Landing;
