import React from "react";
import {
  box,
  box1,
  box2,
  boxPara,
  boxhead1,
  boxhead2,
  boxhead3,
  boxhead4,
  boxhead5,
  boxhead6,
  choose,
  chooseBoxes,
  choosePara,
} from "./ChooseStyle";
import "../../../App.css";

function Choose() {
  return (
    <div style={choose} className="choosebox">
      <p style={choosePara} className="choosePara">
        Why Choose Us
      </p>
      <div style={chooseBoxes} className="chooseboxes">
        <div style={box1} className="box">
          <div style={box} className="boxx">
            <h3 style={boxhead1} className="boxhead">
              Integrity
            </h3>
            <p style={boxPara} className="boxpara">
              We prioritize honesty, transparency, and ethical standards in our
              business. We build trust with clients and employees through open
              communication and fulfilling our commitments.
            </p>
          </div>
          <div style={box} className="boxx">
            <h3 style={boxhead2} className="boxhead">
              Excellence
            </h3>
            <p style={boxPara} className="boxpara">
              We are dedicated to delivering exceptional quality and service. We
              take pride in our work and constantly improve our processes for
              maximum efficiency and effectiveness.
            </p>
          </div>
          <div style={box} className="boxx">
            <h3 style={boxhead3} className="boxhead">
              Reliability
            </h3>
            <p style={boxPara} className="boxpara">
              We prioritize environmental sustainability in all our operations.
              We use eco-friendly products, equipment, and techniques to
              minimize our environmental impact.
            </p>
          </div>
        </div>
        <div style={box2} className="box">
          <div style={box} className="boxx">
            <h3 style={boxhead4} className="boxhead">
              Sustainability
            </h3>
            <p style={boxPara} className="boxpara">
              We promote environmental sustainability by using eco-friendly
              products, equipment, and techniques to minimize our impact.
            </p>
          </div>
          <div style={box} className="boxx">
            <h3 style={boxhead5} className="boxhead1">
              Customer Focus
            </h3>
            <p style={boxPara} className="boxpara">
              We prioritize client satisfaction, delivering personalized and
              attentive service that meets unique needs. By actively listening
              to client feedback, we continuously improve our services to exceed
              expectations.
            </p>
          </div>
          <div style={box} className="boxx">
            <h3 style={boxhead6} className="boxhead">
              Safety
            </h3>
            <p style={boxPara} className="boxpara">
              We prioritize safety and well-being for employees, clients, and
              communities. Following industry-standard safety protocols and
              using non-toxic cleaning products, we create a safe and healthy
              environment for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
