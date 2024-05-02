import "./ProjectCard.css";
function ProjectCard() {
  return (
    <div className="projectCard">
      {/*move this to a component to call repeatedly*/}
      <h2>Dungeons & Dragons Web applications</h2>
      <h3>Description</h3>
      <p>
        Created a React web application that allows Dungeons and Dragons players
        to roll dice virtually as well as share story notes and game items
      </p>
      <h3>Goal</h3>
      <ul>
        <li>Familurise myself with react framework</li>
        <li>Practice creating and manipulating components</li>
        <li>Create solution</li>
      </ul>
      <div className="test">
        <button className="largebtn">github</button>
      </div>
    </div>
  );
}
export default ProjectCard;
