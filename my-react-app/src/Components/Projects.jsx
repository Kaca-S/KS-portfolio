import ProjectCard from './ProjectCard';
import '../Components/Projects.css';


function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
      <ProjectCard
        name="Responsive Web Design and Adaptive Graphics"
        screenshot="/images/img responsive.png"
        repo="https://github.com/yourusername/responsive-web-design"
        techUsed="HTML, CSS, Responsive Design"
        description="Rebuilt a Figma design with a focus on responsiveness across all devices."
        whatItDoes="Adjusts layouts and graphics dynamically to fit any screen size."
        whatILearned="Deepened my skills in responsive design and advanced media queries."
        challengesSolved="Maintained visual consistency not just at breakpoints but across all screen widths."
        role="Recreated the Figma layout to ensure seamless design and functionality across different devices."
      />
      <ProjectCard
        name="Genesis Portfolio - Cross Browser Compatibility"
        screenshot="/images/img genesis.png"
        repo="https://github.com/yourusername/genesis-portfolio"
        techUsed="HTML, Sass, CSS, Cross-Browser Testing"
        description="Recreated the Genesis portfolio design from Figma using Sass for modular and maintainable styling."
        whatItDoes="A three-page portfolio with navigation linking all pages, styled for cross-browser consistency."
        whatILearned="Mastered Sass structuring and improved my cross-browser testing skills."
        challengesSolved="Ensured consistent layout and styling behavior across various browsers."
        role="Rebuilt the entire Genesis portfolio design with Sass and connected all pages through navigation."
      />
      <ProjectCard
        name="Space World Website (Group Project)"
        screenshot="/images/img space-world.png"
        repo="https://github.com/yourusername/space-website"
        techUsed="HTML, CSS, JavaScript, Git, GitHub"
        description="Collaboratively built a space-themed multi-page website with animations, form validation, and full navigation."
        whatItDoes="Features an About Us, Product Gallery, Contact Form, and animated Landing Page."
        whatILearned="Team collaboration using Git/GitHub, branching strategies, and building dynamic, interactive web pages."
        challengesSolved="Maintained consistent styling and implemented robust form validation across the project."
        role="Created the Contact Page with a complete, validated form, and designed animated elements alongside it."
      />
      </div>
    </div>
  );
}

export default Projects;
