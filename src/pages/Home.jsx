import NavDeck from "../components/NavDeck";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title"> Want to Know More About Me?</h1>
      <p className="home-subtitle">Choose your next card 🎴</p>
      <NavDeck />
    </div>
  );
}
