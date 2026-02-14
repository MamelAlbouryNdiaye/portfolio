import { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ project, delay }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`project-flip-card ${flipped ? "flipped" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="project-flip-inner">

        {/* FRONT */}
        <div className="project-front">
          <h2>{project.title}</h2>

          <img src={project.image} alt={project.title} />

          <p>{project.shortDescription}</p>

          <div className="project-actions">
            {project.live && (
              <a href={project.live} target="_blank">Live</a>
            )}
            {project.github && (
              <a href={project.github} target="_blank">GitHub</a>
            )}
            <button onClick={() => setFlipped(true)}>Details</button>
          </div>
        </div>

        {/* BACK */}
        <div className="project-back">
          <h3>About the project</h3>
          <p>{project.description}</p>

          <div className="tech-list">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          <button className="close-btn" onClick={() => setFlipped(false)}>
            🔙 Back
          </button>
        </div>

      </div>
    </motion.div>
  );
}
