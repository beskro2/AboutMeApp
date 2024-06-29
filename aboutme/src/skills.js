import React from "react";
import "./Skills.css";
import { FaLaptopCode } from "react-icons/fa";

function Skills({ title }) {
  return (
    <div className="skillscontainer">
      <FaLaptopCode className="skillsicon" />
      <h1>{title}</h1>
    </div>
  );
}
export default Skills;
