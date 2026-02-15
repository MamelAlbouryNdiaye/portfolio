import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) =>
        console.error("Error loading projects:", err)
      );
  }, [API_URL]);

  return (
    <div className="projects-page">
      <h1 className="projects-title">🎴 Projects Deck</h1>

      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="arrow"></div>
      </div>

      <Link to="/" className="back-home-floating">
        ← Home
      </Link>

      <div className="projects-column">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project._id}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.03,
              rotateX: 2,
              rotateY: -2,
            }}
          >
            <header className="project-header">
              <h2>{project.title}</h2>
            </header>

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-body">
              <p className="project-description">
                {project.description}
              </p>

              {project.tech?.length > 0 && (
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
