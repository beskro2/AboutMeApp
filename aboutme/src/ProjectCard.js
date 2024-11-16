import "./ProjectCard.css";
import React from "react";

function ProjectCard({ title, description, picture, link }) {
  return (
    <div className="projectCard">
      <div className="imagecontainer">
        <img src={picture} alt="discription"></img>
      </div>
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="test">
        <a href={link}>
          <button className="largebtn">github</button>
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
