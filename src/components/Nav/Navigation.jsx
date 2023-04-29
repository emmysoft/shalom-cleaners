import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import {
  Name,
  bizname,
  linkStyle,
  nav,
  navArea,
  navBtn,
  navbtn,
  navigation,
} from "./NavStyle";
import { NavButton } from "../Button";
import shalomlogo from "../../assets/shalomlogo.png";
import "../../App.css";

function Navigation() {
  return (
    <>
      <div style={navigation}>
        <div style={Name}>
          <img src={shalomlogo} style={bizname} alt="" />
        </div>
        <div style={navArea}>
          <div style={nav}>
            <NavLink
              to="/"
              style={linkStyle}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink to="/" style={linkStyle}>
              About
            </NavLink>
            <NavLink to="/" style={linkStyle}>
              Projects
            </NavLink>
            <NavLink to="/" style={linkStyle}>
              Services
            </NavLink>
            <NavLink to="/" style={linkStyle}>
              Contact
            </NavLink>
          </div>
          <div style={navBtn}>
            <NavButton to="/" style={navbtn}>
              Book a Service
              <AiOutlineArrowRight
                style={{ color: "#000080", width: "16px", height: "16px" }}
              />
            </NavButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
