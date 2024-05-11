import "./ProjectCard.css";
import React from "react";

function ProjectCard({ title, description, picture }) {
  return (
    <div className="projectCard">
      {/*move this to a component to call repeatedly*/}
      <img src={picture} className="projpic"></img>
      <h2>{title}</h2>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Goal</h3>

      <div className="test">
        <button className="largebtn">github</button>
      </div>
    </div>
  );
}
export default ProjectCard;
