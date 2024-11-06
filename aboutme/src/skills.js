import React from "react";
import "./Skills.css";

function Skills({ icon: Icon, title, description }) {
  return (
    <div className="skillscontainer">
      <Icon size={50} color="grey" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default Skills;
