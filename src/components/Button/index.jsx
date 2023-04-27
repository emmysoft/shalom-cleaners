import React from "react";
import { Link } from "react-router-dom";

export const NavButton = ({ to, children, style }) => {
  return (
    <>
      <Link to={to} style={style}>
        {children}
      </Link>
    </>
  );
};

export const SubmitButton = ({ to, children, style }) => {
  return (
    <>
      <Link to={to} style={style}>
        {children}
      </Link>
    </>
  );
};
