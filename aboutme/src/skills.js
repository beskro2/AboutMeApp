import React from "react";
import "./Skills.css";

function Skills({ icon: Icon, title, description }) {
  return (
    <div className="skillsBumper">
      <div className="skillsContainer">
        <Icon />
        <h1 className="skillTitle">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Skills;
