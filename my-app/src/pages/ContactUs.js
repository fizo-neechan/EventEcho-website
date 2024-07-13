import React from "react";
import "../App.css";
import "./ContactUs.css";
import Form from "./Form";
import about_back1 from "../images/about_back1.png";
import phone_about1 from "../images/phone_about1.png";

function ContactUs() {
  return (
    <div className="contact">
      <img src={about_back1} alt="Background" className="fullscreen-img" />
      <img src={phone_about1} alt="Phone" className="smallscreen-img" />
     
      <div className="glass-morphism form-padding">
        <div className="form">
          <div className="contact-header">
            <p>DON'T HESITATE TO CONTACT US IF YOU HAVE ANY QUESTIONS:</p>
            <p>EMAIL US @ ayse.ucis@gmail.com</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
