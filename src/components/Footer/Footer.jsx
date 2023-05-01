import React from "react";
import { footerBody, footerPara } from "./FooterStyle";

function Footer() {
  return (
    <>
      <div style={footerBody}> 
        <p style={footerPara}>
          © 2023 Shalom Cleaning Services. All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
