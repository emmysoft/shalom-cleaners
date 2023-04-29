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

function Choose() {
  return (
    <div style={choose}>
      <p style={choosePara}>Why Choose Us</p>
      <div style={chooseBoxes}>
        <div style={box1}>
          <div style={box}>
            <h3 style={boxhead1}>Integrity</h3>
            <p style={boxPara}>
              We believe in conducting our business with the highest levels of
              honesty, transparency, and ethical standards. We strive to build
              trust with our clients and employees by maintaining open and
              honest communication and always doing what we say we will do
            </p>
          </div>
          <div style={box}>
            <h3 style={boxhead2}>Excellence</h3>
            <p style={boxPara}>
              We are committed to delivering exceptional quality and service in
              everything we do. We take pride in our work and continuously
              strive to improve our processes and techniques to ensure maximum
              efficiency and effectiveness
            </p>
          </div>
          <div style={box}>
            <h3 style={boxhead3}>Reliability</h3>
            <p style={boxPara}>
              We understand that our clients depend on us to deliver on our
              promises, and we take that responsibility seriously. We are
              reliable and accountable, always showing up on time and ready to
              work, and delivering our services with consistency and
              dependability.
            </p>
          </div>
        </div>
        <div style={box2}>
          <div style={box}>
            <h3 style={boxhead4}>Sustainability</h3>
            <p style={boxPara}>
              We are committed to promoting environmentally sustainable
              practices in all our operations. We use eco-friendly cleaning
              products and equipment and employ green cleaning techniques to
              minimize our environmental impact
            </p>
          </div>
          <div style={box}>
            <h3 style={boxhead5}>Customer Focus</h3>
            <p style={boxPara}>
              We understand that our clients are at the heart of our business,
              and we are committed to delivering personalized and attentive
              service to meet their unique needs. We listen to our clients'
              feedback and use it to continually improve our services and exceed
              their expectations.
            </p>
          </div>
          <div style={box}>
            <h3 style={boxhead6}>Safety</h3>
            <p style={boxPara}>
              We prioritize the safety and well-being of our employees, clients,
              and their communities. We follow industry-standard safety
              protocols and use non-toxic cleaning products to ensure a safe and
              healthy environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
