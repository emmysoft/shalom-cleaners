import React from "react";
// import { AiOutlinePlayCircle } from "react-icons/ai";

import {
  book,
  header,
  headerPara,
  heroHead,
  herobody,
  herofoot,
  img1,
  img2,
  pictures,
} from "./HeroStyle";
import { SubmitButton } from "../../components/Button";
import cleaner1 from "../../assets/cleaner1.png";
import cleaner2 from "../../assets/cleaner2.png";

import "../../App.css";

function Hero() {
  return (
    <>
      <div style={herobody} className="herobody">
        <div style={heroHead} className="heroHead">
          <h2 style={header} className="header">
            Let’s Give your vehicle{" "}
            <span
              className="span"
              style={{ color: "#FFDF37", textTransform: "capitalize" }}
            >
              the perfect cleaning
            </span>{" "}
            it deserves
          </h2>
          <p style={headerPara} className="headerPara">
            We provide exceptional cleaning services that exceed our clients'
            expectations while promoting a healthy and safe environment for
            everyone. We aim to accomplish this by using eco-friendly cleaning
            products and the latest technology and techniques to ensure maximum
            efficiency and effectiveness.
          </p>
          <div style={herofoot} className="herofoot">
            <SubmitButton to="#contact" style={book} className="book">
              Book Now
            </SubmitButton>
          </div>
        </div>
        <div style={pictures} className="pictures">
          <img src={cleaner1} alt="cleaner" style={img1} className="picImg" />
          <img src={cleaner2} alt="cleaner" style={img2} className="picImg" />
        </div>
      </div>
    </>
  );
}

export default Hero;
