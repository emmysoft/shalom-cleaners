import React from "react";
import { footerBody, footerPara } from "./FooterStyle";
import "../../App.css";

function Footer() {
  return (
    <>
      <div style={footerBody}> 
        <p style={footerPara} className="footerPara">
          © 2023 Shalom Cleaning Services. All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
