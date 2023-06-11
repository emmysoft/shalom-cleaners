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
import job2 from "../../../assets/job2.png";
import job3 from "../../../assets/job3.png";
import job4 from "../../../assets/job4.png";
import job5 from "../../../assets/job5.png";
import job6 from "../../../assets/job6.png";
// import woman from "../../../assets/woman.png";
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
              className="serviceImage"
            />
            <img
              src={job2}
              className="serviceImage"
              alt="job"
              style={{ width: "370px", height: "240px" }}
            />
            <img
              src={job3}
              alt="job"
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
          </div>
          <div style={projectPic2} className="projects">
            <img
              src={job4}
              alt=""
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
            <img
              src={job5}
              alt=""
              style={{ width: "370px", height: "240px" }}
              className="serviceImage"
            />
            <img
              src={job6}
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
