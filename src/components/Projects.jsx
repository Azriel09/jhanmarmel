import "./styles/projects.css";
import "./styles/main-styles.css";

export default function Projects({ projects }) {
  return (
    <div className="projects page" ref={projects}>
      <h2 className="page-header">Projects</h2>
    </div>
  );
}
