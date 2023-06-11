import React from "react";
// import { useAnimate } from "framer-motion";

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
import Choose from "./Choose/Choose.jsx";
import Project from "./Project/Project.jsx";
import Services from "./Services/Services.jsx";
import "../../App.css";

function Body() {
  // const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   animate(
  //     scope.current,
  //     { opacity: [0, 2] },
  //     { duration: 0.5, delay: 0.1 },
  //     { transition: 0.1 }
  //   );
  // }, []);

  return (
    <>
      <div style={bodyStyle} className="bodyStyle">
        <div style={about}>
          <h3 style={aboutName} className="aboutName">
            About Us
          </h3>
          <p style={aboutPara} className="aboutPara">
            We provide exceptional cleaning services that exceed our clients'
            expectations while promoting a healthy and safe environment for
            everyone. We aim to accomplish this by using eco-friendly cleaning
            products and the latest technology and techniques to ensure maximum
            efficiency and effectiveness.
          </p>
        </div>
        <div style={detail} className="detail">
          <div style={mission} className="mission">
            <img src={cleaner3} alt="cleaner" style={img} className="img" />
            <div style={missiondetail} className="missiondetail">
              <h4 style={missiontopic} className="missiontopic">
                Mission
              </h4>
              <p style={missionpara} className="missionpara">
                We provide exceptional cleaning services that exceed our
                clients' expectations while promoting a healthy and safe
                environment for everyone. We aim to accomplish this by using
                eco-friendly cleaning products and the latest technology and
                techniques to ensure maximum efficiency and effectiveness.
              </p>
            </div>
          </div>
          <div style={vision} className="vision">
            <div style={visiondetail} className="visiondetail">
              <h4 style={visiontopic} className="visiontopic">
                Vision
              </h4>
              <p style={visionpara} className="visionpara">
                We provide exceptional cleaning services that exceed our
                clients' expectations while promoting a healthy and safe
                environment for everyone. We aim to accomplish this by using
                eco-friendly cleaning products and the latest technology and
                techniques to ensure maximum efficiency and effectiveness.
              </p>
            </div>
            <img src={cleaner4} alt="cleaner" style={img} className="img" />
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
