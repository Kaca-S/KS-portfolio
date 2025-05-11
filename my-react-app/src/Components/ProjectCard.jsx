
import '../Components/ProjectCard.css';

function ProjectCard({ 
  name, 
  screenshot, 
  repo, 
  techUsed, 
  description, 
  whatItDoes, 
  whatILearned, 
  challengesSolved,
  role,
  onClick
}) {
    const myRepo = "https://github.com/Kaca-S/My-projects-portfolio";

  return (
    <div className="project-card" onClick={onClick}>
      <h3 className="project-title">{name}</h3>
      <img src={screenshot} alt={`${name} screenshot`} className="project-image" />
      <div className="project-info">
      <p><strong>Tech Used:</strong> {techUsed}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>What it Does:</strong> {whatItDoes}</p>
      <p><strong>What I Learned:</strong> {whatILearned}</p>
      <p><strong>Challenges Solved:</strong> {challengesSolved}</p>
      <p><strong>My Role:</strong> {role}</p>
      </div>
      <a href={repo|| myRepo} target="_blank" rel="noopener noreferrer" className="repo-link">View Project</a>
    </div>
  );
}

export default ProjectCard;
