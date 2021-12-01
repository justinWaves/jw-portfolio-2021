import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer__contactHeader">Let's get in touch!</h1>
      <form id="contact-form"  method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" ></textarea>
    </div>
    <button type="submit" className="footer__formButton">Submit</button>
</form>
    </div>
  );
}

export default Footer;
