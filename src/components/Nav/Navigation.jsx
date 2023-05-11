import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";

import {
  Name,
  linkStyle,
  nav,
  navArea,
  navBtn,
  navbtn,
  navigation,
} from "./NavStyle";
import { NavButton } from "../Button";
import shalomlogo from "../../assets/shalomlogo.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={navigation} className="navigation">
        <div style={Name} className="Name">
          <img src={shalomlogo} alt="logo" className="logo" />
          <div className="menu_bar" onClick={handleToggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div style={navArea} className={`navArea ${isOpen && 'navArea'}`}>
          <div style={nav} className="nav">
            <NavLink to="/" style={linkStyle}>
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
          <div style={navBtn} className="navbtn">
            <NavButton to="/" style={navbtn} className="navbtn">
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
