import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

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
  video,
  vid,
} from "./HeroStyle";
import { SubmitButton } from "../../components/Button";
import cleaner1 from "../../assets/cleaner1.png";
import cleaner2 from "../../assets/cleaner2.png";

function Hero() {
  return (
    <>
      <div style={herobody}>
        <div style={heroHead}>
          <h2 style={header}>
            Let’s Give your vehicle{" "}
            <span style={{ color: "#FFDF37", textTransform: "capitalize" }}>
              the perfect cleaning
            </span>{" "}
            it’s deserve
          </h2>
          <p style={headerPara}>
            We provide exceptional cleaning services that exceed our clients'
            expectations while promoting a healthy and safe environment for
            everyone. We aim to accomplish this by using eco-friendly cleaning
            products and the latest technology and techniques to ensure maximum
            efficiency and effectiveness.{" "}
          </p>
          <div style={herofoot}>
            <SubmitButton to="/" style={book}>
              Book Now
            </SubmitButton>
            <div style={video}>
              <AiOutlinePlayCircle
                style={{ color: "#fff", width: "59px", height: "59px" }}
              />
              <p style={vid}>Watch Video</p>
            </div>
          </div>
        </div>
        <div style={pictures}>
          <img src={cleaner1} alt="cleaner" style={img1} />
          <img src={cleaner2} alt="cleaner" style={img2} />
        </div>
      </div>
    </>
  );
}

export default Hero;
