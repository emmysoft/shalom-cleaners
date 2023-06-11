import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { footerBody, footerPara } from "./FooterStyle";
import "../../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div style={footerBody} className="footerBody">
        <p style={footerPara} className="footerPara">
          © 2023 Shalom Cleaning Services. All Rights Reserved
        </p>
        <div className="socials">
          <Link to="https://www.facebook.com/profile.php?id=100093322780141&mibextid=ZbWKwL">
            <FiFacebook style={{ color: "#fff" }} />
          </Link>
          <Link to="https://instagram.com/shalomandsons?igshid=MzNlNGNkZWQ4Mg==">
            <FiInstagram style={{ color: "#fff" }} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
