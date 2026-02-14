import { useNavigate } from "react-router-dom";
import "./NavDeck.css";

const cards = [
  { title: "Skills", icon: "♣", suit: "club", path: "/skills", back: "My technical skills" },
  { title: "Projects", icon: "♠", suit: "spade", path: "/projects", back: "Real projects I built" },
  { title: "About", icon: "♦", suit: "diamond", path: "/about", back: "Who I am" },
  { title: "Contact", icon: "♥", suit: "heart", path: "/contact", back: "Get in touch" },
  { title: "Resume", icon: "👑", suit: "royal", path: "/resume", back: "Download CV" },
];

export default function NavDeck() {
  const navigate = useNavigate();

  return (
    <div className="nav-deck">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className="nav-card-wrapper"
          style={{ animationDelay: `${i * 0.15}s` }}
          onClick={() => navigate(card.path)}
        >
          <div className={`nav-card ${card.suit}`}>
            {/* FRONT */}
            <div className="nav-card-front">
              <span className="nav-icon">{card.icon}</span>
              <h2>{card.title}</h2>
            </div>

            {/* BACK */}
            <div className="nav-card-back">
              <p>{card.back}</p>
              <span className="small-icon">{card.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
