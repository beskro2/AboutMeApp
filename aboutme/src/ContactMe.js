import "./ContactMe.css";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
function ContactMe() {
  const handleClick = () => {
    window.location.href = `mailto:eskroben@gmail.com`;
  };

  return (
    <div className="contactzone">
      <div className="contactcard">
        <div className="texticongroup">
          <button className="emailbutton" onClick={handleClick}>
            <MdEmail className="emailicon" />
          </button>
          <h1> eskroben@gmail.com </h1>
        </div>
        <div className="texticongroup">
          <a href="https://www.linkedin.com/in/ben-eskro/" target="_blank">
            <button class="smallbtn">
              <FaLinkedinIn className="linkedicon" />
            </button>
          </a>
          <h1> LinkedIn</h1>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
