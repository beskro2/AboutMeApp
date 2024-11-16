import "./ContactMe.css";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
function ContactMe() {
  const handleClick = () => {
    window.location.href = `tel:+17634066071`;
  };

  return (
    <div className="contactcard">
      <div className="texticongroup">
        <button
          className="emailbutton"
          onClick={() => (window.location.href = `mailto:eskroben@gmail.com`)}
        >
          <MdEmail className="contactIcon" />
        </button>
        <h1 className="contactTitle"> eskroben@gmail.com </h1>
      </div>
      <div className="texticongroup">
        <a href="https://www.linkedin.com/in/ben-eskro/">
          <button class="smallbtn">
            <FaLinkedinIn className="contactIcon" />
          </button>
        </a>
        <h1 className="contactTitle">Linkedin</h1>
      </div>
      <div className="texticongroup">
        <button className="emailbutton" onClick={handleClick}>
          <IoIosCall className="contactIcon" />
        </button>

        <h1 className="contactTitle"> (763) 406-6071</h1>
      </div>
    </div>
  );
}
export default ContactMe;
