import React from "react";
import {
  double,
  projectBody,
  projectPic1,
  projectPic2,
  projecthead,
  projects,
} from "./ProjectStyle";
import trailer from "../../assets/trailer.png";
import old from "../../assets/old.png";
import better from "../../assets/better.png";
import CEO from "../../assets/CEO.png";
import kitchen from "../../assets/kitchen.png";
import cleaner5 from "../../assets/cleaner5.png";
import woman from "../../assets/woman.png";

function Project() {
  return (
    <>
      <div style={projectBody}>
        <h3 style={projecthead}>Our Project</h3>
        <div style={projects}>
          <div style={projectPic1}>
            <img
              src={trailer}
              alt="trailer"
              style={{ width: "370px", height: "240px" }}
            />
            <div style={double}>
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
            <img src={CEO} alt="" style={{ width: "370px", height: "240px" }} />
          </div>
          <div style={projectPic2}>
            <img
              src={kitchen}
              alt=""
              style={{ width: "370px", height: "240px" }}
            />
            <img
              src={cleaner5}
              alt=""
              style={{ width: "370px", height: "240px" }}
            />
            <img
              src={woman}
              alt=""
              style={{ width: "370px", height: "240px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
