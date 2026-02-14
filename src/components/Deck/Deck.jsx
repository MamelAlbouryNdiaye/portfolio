import "./Deck.css";

export default function Deck({ cards }) {
  return (
    <div className="deck">
      {cards.map((card, i) => {
        const rotation = Math.random() * 10 - 5; // rotation aléatoire
        return (
          <div
            className="card loaded"
            key={i}
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionDelay: `${i * 0.1}s`, // animation-delay pour effet staggered
            }}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="icon">{card.icon || "🎴"}</span>
                <h2>{card.title}</h2>
              </div>
              <div className="card-back">
                {card.level ? (
                  <>
                    <p>Level</p>
                    <strong>{card.level}</strong>
                  </>
                ) : (
                  <>
                    <p>Stack</p>
                    <strong>{card.stack?.join(" • ")}</strong>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
