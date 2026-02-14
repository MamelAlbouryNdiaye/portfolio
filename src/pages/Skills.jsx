import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Deck from "../components/Deck/Deck.jsx";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch(console.error);
  }, []);

  return (
    <div className="skills-page">
      <h1 className="skills-title">🧠 Skills Deck</h1>

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
