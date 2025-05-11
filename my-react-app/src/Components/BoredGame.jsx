import React, { useState } from "react";
import "./BoredGame.css";

function BoredGame() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchActivity = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://corsproxy.io/?https://www.boredapi.com/api/activity/");
      const data = await response.json();
      setActivity(data);
    } catch (error) {
      console.error("Error fetching activity:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bored-simple">
      <h2>Bored? Get a Random Activity</h2>
      <button onClick={fetchActivity} disabled={loading}>
        {loading ? "Loading..." : "Give Me an Activity!"}
      </button>

      {activity && (
        <div className="activity-box">
          <p><strong>Activity:</strong> {activity.activity}</p>
          <p><strong>Type:</strong> {activity.type}</p>
        </div>
      )}
    </div>
  );
}

export default BoredGame;
