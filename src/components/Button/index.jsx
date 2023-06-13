import React from "react";
import { Link } from "react-router-dom";

export const NavButton = ({ to, children, style, className }) => {
  return (
    <>
      <Link to={to} style={style} className={className}>
        {children}
      </Link>
    </>
  );
};

export const SubmitButton = ({ to, children, style, className }) => {
  return (
    <>
      <Link to={to} style={style}>
        <p className={className}>{children}</p>
      </Link>
    </>
  );
};
