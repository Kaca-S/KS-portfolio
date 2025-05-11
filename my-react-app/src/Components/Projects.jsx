import { useState } from "react";
import ProjectCard from "./ProjectCard";
import PopupWindow from "./PopupWindow";
import ProjectsData from "./ProjectsData"; // renamed to avoid conflict
import "../Components/Projects.css";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenPopup = (project) => {
    setPopupData(project);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };
  const filteredProjects = ProjectsData.filter((project) => {
    const term = searchTerm.toLowerCase();

    const matchesName = project.name.toLowerCase().includes(term);

    const techArray = project.techUsed
      .split(",")
      .map((tech) => tech.trim().toLowerCase());

    const matchesTech = techArray.some((tech) => tech.includes(term));

    return matchesName || matchesTech;
  });
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="project-search"
      />
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() =>
            handleOpenPopup({
            name: project.name,
            description: project.description,
            techUsed: project.techUsed,})}
          />
          ))
        ) : (
          <p className="no-projects">No projects found. Try another search term.</p>
        )}
      </div>

      {isOpen && (
        <PopupWindow
          name={popupData.name}
          description={popupData.description}
          techUsed={popupData.techUsed}
          onClick={handleClosePopup}
        />
      )}
    </div>
  );
}

export default Projects;
