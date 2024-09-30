import React from "react";
import "./ProfessionalSkills.css";
import FitText from "react-fittext";
import { FaRegCheckCircle } from "react-icons/fa";
function ProfessionalSkills({ title }) {
  return (
    <div className="skillscontainer">
      <FaRegCheckCircle className="skillsicon" />

      <h1 className="SkillName">{title}</h1>
    </div>
  );
}
export default ProfessionalSkills;
