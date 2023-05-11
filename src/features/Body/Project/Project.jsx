import React from "react";
import {
  double,
  projectBody,
  projectPic1,
  projectPic2,
  projecthead,
  projects,
} from "./ProjectStyle";
import trailer from "../../../assets/trailer.png";
import old from "../../../assets/old.png";
import better from "../../../assets/better.png";
import CEO from "../../../assets/CEO.png";
import kitchen from "../../../assets/kitchen.png";
import cleaner5 from "../../../assets/cleaner5.png";
import woman from "../../../assets/woman.png";
import "../../../App.css";

function Project() {
  return (
    <>
      <div style={projectBody} className="projectbody">
        <h3 style={projecthead} className="projecthead">
          Our Project
        </h3>
        <div style={projects} className="projects">
          <div style={projectPic1} className="projects">
            <img
              src={trailer}
              alt="trailer"
              style={{ width: "370px", height: "240px" }}
              className="projectImage"
            />
            <div style={double} className="serviceImage">
              <img
                src={old}
                alt="pic"
                style={{ width: "188px", height: "247px" }}
              />
              <img
                src={better}
                alt="pic"
                style={{ width: "188px", height: "247px" }}
              />
            </div>
            <img
              src={CEO}
              alt=""
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
          </div>
          <div style={projectPic2} className="projects">
            <img
              src={kitchen}
              alt=""
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
            <img
              src={cleaner5}
              alt=""
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
            <img
              src={woman}
              alt=""
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
