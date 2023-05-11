import React from "react";
import { SubmitButton } from "../Button";
import {
  form,
  formbutton,
  input,
  inputEmail,
  inputPhone,
  textbox,
} from "./FormStyle";
import "../../App.css";

function Form() {
  return (
    <>
      <form style={form} className="form">
        <div style={input} className="input">
          <input
            placeholder="Email Address"
            type="email"
            style={inputEmail}
            className="inputt"
          />
          <input
            placeholder="Phone No"
            type="tel"
            style={inputPhone}
            className="inputt"
          />
        </div>
        <textarea placeholder="Message" style={textbox} className="text" />
        <SubmitButton to="/" style={formbutton} className="submitbtn">
          Send a Message
        </SubmitButton>
      </form>
    </>
  );
}

export default Form;
