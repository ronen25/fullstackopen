import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const StatisticView = ({ stats }) => {
  const stat_views = [];

  for (let i = 0; i < stats.length; i++) {
    stat_views.push(
      <p>
        {stats[i].name} {stats[i].count}
      </p>
    );
  }

  return stat_views;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>

      <button id="btnGood" onClick={() => setGood(good + 1)}>
        Good
      </button>

      <button id="btnNeutral" onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>

      <button id="btnBad" onClick={() => setBad(bad + 1)}>
        Bad
      </button>

      <h1>Statistics</h1>
      <StatisticView
        stats={[
          {
            name: "good",
            count: good,
          },
          {
            name: "bad",
            count: bad,
          },
          {
            name: "neutral",
            count: neutral,
          },
        ]}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
