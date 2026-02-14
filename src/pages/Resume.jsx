import { useState } from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  const documents = [
    {
      title: "Curriculum Vitae",
      file: "/CV_Mamel_Alboury_Ndiaye.pdf",
    },
    {
      title: "Diplomas",
      file: "/Diplomas_Mamel.jpg",
    },
    {
      title: "Certifications",
      file: "/Certifications_Mamel.jpg",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div className="resume-page">
      <h1>📄 My Documents Deck</h1>

      <div className="resume-deck">
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            className={`resume-card ${hovered === index ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <h2>{doc.title}</h2>
            <iframe
              src={doc.file}
              title={doc.title}
              className="resume-iframe"
            ></iframe>
            <a href={doc.file} download className="download-btn">
              📥 Download
            </a>
          </motion.div>
        ))}
      </div>

      {/* Mini navigation back */}
      <div className="back-card">
        <a href="/" className="back-link">🎴 Back to Home</a>
      </div>
    </div>
  );
}
