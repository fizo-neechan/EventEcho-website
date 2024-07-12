import "../App.css";
import "./Contact_us.css";
import Form from "./Form";
import about_back1 from "../images/about_back1.png";
import phone_about1 from "../images/phone_about1.png";

function Contact_us() {
  return (
    <div className="contact">
      <img src={about_back1} alt="Background" className="fullscreen-img" />
      <img src={phone_about1} alt="Phone" className="smallscreen-img" />
      <div className="form">
        <h2>Contact Us</h2>
        <Form />
      </div>
    </div>
  );
}

export default Contact_us;
