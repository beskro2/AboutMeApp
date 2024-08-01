import React from "react";
import "./Skills.css";
import { FaRegCheckCircle } from "react-icons/fa";
function ProfessionalSkills({ title }) {
  return (
    <div className="skillscontainer">
      <FaRegCheckCircle className="skillsicon" />
      <h1 className="skillname">{title}</h1>
    </div>
  );
}
export default Skills;
