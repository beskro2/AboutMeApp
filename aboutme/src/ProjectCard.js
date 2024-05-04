import "./ProjectCard.css";
import React from "react";

function ProjectCard({ title, description, goal }) {
  return (
    <div className="projectCard">
      {/*move this to a component to call repeatedly*/}
      <h2>{title}</h2>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Goal</h3>
      <ul>
        {goal.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="test">
        <button className="largebtn">github</button>
      </div>
    </div>
  );
}
export default ProjectCard;
