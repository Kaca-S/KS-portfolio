import { useState } from "react";
import Projects from "../Components/Projects.jsx";
import "../Pages/Portfolio.css";

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);

    const handleClick = () => {
      setShowProjects(!showProjects);
};
return (
    <div className="portfolio-page">
      <h1 className="page-title">My Portfolio</h1>
      <p className="page-intro">Code, creativity, and collaboration — each project taught me something new about building real-world websites.
        Whether working solo or in a team, I focused on writing clean code, designing for all devices,
        and delivering great user experiences.</p>
      <p className="preview-text">Click the button below to view my work:</p>

    <button onClick={handleClick} className={`preview-button ${showProjects ? "active" : ""}`}>
      {showProjects ? "Hide Projects" : "Preview My Projects"}
    </button>

    {showProjects && <Projects />}
  </div>
);
}


export default Portfolio;