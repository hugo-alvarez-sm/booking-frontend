import React from "react";
import "./style/TemplateActivityForm.css";

function TemplateActivityForm() {
  return (
    <form className="ms-form">
      <div className="ms-form-group">
        <label htmlFor="exampleInputEmail1" className="ms-label">
          Email address
        </label>
        <input
          type="email"
          className="ms-input"
          id="exampleInputEmail1"
          placeholder="Enter email"
        />
        <small className="ms-helper-text">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="ms-form-group">
        <label htmlFor="exampleInputPassword1" className="ms-label">
          Password
        </label>
        <input
          type="password"
          className="ms-input"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="ms-form-check">
        <input type="checkbox" className="ms-checkbox" id="exampleCheck1" />
        <label className="ms-checkbox-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="ms-btn">
        Submit
      </button>
    </form>
  );
}

export default TemplateActivityForm;
