import React, { useState } from "react";
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
      <form
        action="https://formsubmit.co/adedejiabel507@gmail.com"
        style={form}
        className="form"
        method="POST"
      >
        <div style={input} className="input">
          <input
            placeholder="Email Address"
            type="email"
            name="email"
            style={inputEmail}
            className="inputt"
          />
          <input
            placeholder="Phone No"
            type="tel"
            name="tel"
            style={inputPhone}
            className="inputt"
          />
        </div>
        <textarea
          placeholder="Message"
          style={textbox}
          className="text"
          type="text"
          name="text"
        />
        <SubmitButton to="/" style={formbutton} className="formbutton">
          <p className="submitbtn">Send Message</p>
        </SubmitButton>
      </form>
    </>
  );
}

export default Form;
