import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Deck from "../components/Deck/Deck.jsx";
import fallbackSkills from "../data/skills.js";
import "./Skills.css";

export default function Skills() {
  const [skills, setSkills] = useState(fallbackSkills);
  const [isUsingFallback, setIsUsingFallback] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) return;

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    fetch(`${apiUrl}/api/skills`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load skills from the API");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSkills(data);
          setIsUsingFallback(false);
        }
      })
      .catch(() => setIsUsingFallback(true))
      .finally(() => window.clearTimeout(timeout));

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <div className="skills-page">
      <h1 className="skills-title">🧠 Skills Deck</h1>
      {isUsingFallback && (
        <p className="data-notice">Portfolio data is temporarily shown from the local version.</p>
      )}

      <Deck cards={skills} />

      {/* 🎴 Mini card navigation */}
      <div className="back-card-wrapper">
        <div className="back-card" onClick={() => navigate("/")}>
          <span className="back-icon">🎴</span>
          <p>Back to Home</p>
        </div>
      </div>
    </div>
  );
}
