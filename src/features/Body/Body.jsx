import React from "react";
import {
  about,
  aboutName,
  aboutPara,
  bodyStyle,
  detail,
  img,
  mission,
  missiondetail,
  missionpara,
  missiontopic,
  vision,
  visiondetail,
  visionpara,
  visiontopic,
} from "./BodyStyle";
import cleaner3 from "../../assets/cleaner3.png";
import cleaner4 from "../../assets/cleaner4.png";
import Choose from "./Choose";
import Project from "./Project";
import Services from "./Services";

function Body() {
  return (
    <>
      <div style={bodyStyle}>
        <div style={about}>
          <h3 style={aboutName}>About Us</h3>
          <p style={aboutPara}>
            We provide exceptional cleaning services that exceed our clients'
            expectations while promoting a healthy and safe environment for
            everyone. We aim to accomplish this by using eco-friendly cleaning
            products and the latest technology and techniques to ensure maximum
            efficiency and effectiveness.
          </p>
        </div>
        <div style={detail}>
          <div style={mission}>
            <img src={cleaner3} alt="cleaner" style={img} />
            <div style={missiondetail}>
              <h4 style={missiontopic}>Mission</h4>
              <p style={missionpara}>
                We provide exceptional cleaning services that exceed our
                clients' expectations while promoting a healthy and safe
                environment for everyone. We aim to accomplish this by using
                eco-friendly cleaning products and the latest technology and
                techniques to ensure maximum efficiency and effectiveness.
              </p>
            </div>
          </div>
          <div style={vision}>
            <div style={visiondetail}>
              <h4 style={visiontopic}>Vision</h4>
              <p style={visionpara}>
                We provide exceptional cleaning services that exceed ourz
                clients' expectations while promoting a healthy and safe
                environment for everyone. We aim to accomplish this by using
                eco-friendly cleaning products and the latest technology and
                techniques to ensure maximum efficiency and effectiveness.
              </p>
            </div>
            <img src={cleaner4} alt="cleaner" style={img} />
          </div>
        </div>
        <Choose />
        <Project />
        <Services />
      </div>
    </>
  );
}

export default Body;
