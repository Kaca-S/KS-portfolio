import React, { useState } from "react";
import "./CatFactGame.css";

function CatFactGame() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      console.error("Error fetching cat fact:", err);
    }
    setLoading(false);
  };

  return (
    <div className="cat-fact-game">
      <h2 className="title-game">🐱 Cat Fact Game</h2>
      <button onClick={fetchFact} disabled={loading}>
        {loading ? "Loading..." : "Get a Cat Fact"}
      </button>

      {fact && (
        <div className="fact-box">
          <p>{fact}</p>
        </div>
      )}
    </div>
  );
}

export default CatFactGame;
