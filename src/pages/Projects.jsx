import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { Link } from "react-router-dom";
import fallbackProjects from "../data/projects.js";

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [isUsingFallback, setIsUsingFallback] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!API_URL) return;

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    fetch(`${API_URL}/api/projects`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const localOnlyProjects = fallbackProjects.filter(
            (localProject) =>
              !data.some(
                (apiProject) =>
                  (apiProject.id || apiProject._id) === localProject.id,
              ),
          );
          setProjects([...localOnlyProjects, ...data]);
          setIsUsingFallback(false);
        }
      })
      .catch(() => setIsUsingFallback(true))
      .finally(() => window.clearTimeout(timeout));

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [API_URL]);

  return (
    <div className="projects-page">
      <h1 className="projects-title">🎴 Projects Deck</h1>
      {isUsingFallback && (
        <p className="data-notice">Portfolio data is temporarily shown from the local version.</p>
      )}

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
            key={project._id || project.id || project.title}
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

            {project.screenshots?.length ? (
              <div className="project-gallery" aria-label={`Aperçus de ${project.title}`}>
                {project.screenshots.map((screenshot, screenshotIndex) => (
                  <img
                    key={screenshot}
                    src={screenshot}
                    alt={`${project.title} — aperçu ${screenshotIndex + 1}`}
                    className="project-gallery-image"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
            )}

            <div className="project-body">
              <p className="project-description">
                {project.description}
              </p>

              {(project.tech || project.stack)?.length > 0 && (
                <div className="project-tech">
                  {(project.tech || project.stack).map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {(project.live || project.github) && (
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      View live site ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Code GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
    

  );
}
