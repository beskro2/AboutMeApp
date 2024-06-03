import "./ContactMe.css";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
function ContactMe() {
  return (
    <div className="contactzone">
      <div className="contactcard">
        <div className="texticongroup">
          <button className="emailbutton">
            <MdEmail className="emailicon" />
          </button>
          <h1> eskroben@gmail.com </h1>
        </div>
        <div className="texticongroup">
          <button class="smallbtn">
            <FaLinkedinIn className="linkedicon" />
          </button>
          <h1> LinkedIn</h1>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
