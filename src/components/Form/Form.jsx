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

function Form() {
  return (
    <>
      <form style={form}>
        <div style={input}>
          <input
            placeholder="Email Address"
            type="email"
            style={inputEmail}
            className="input"
          />
          <input
            placeholder="Phone No"
            type="tel"
            style={inputPhone}
            className="input"
          />
        </div>
        <textarea placeholder="Message" style={textbox} className="input" />
        <SubmitButton to="/" style={formbutton}>
          Send a Message
        </SubmitButton>
      </form>
    </>
  );
}

export default Form;
