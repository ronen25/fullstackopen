import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const StatisticView = ({ stats }) => {
  const stat_views = [];

  for (let i = 0; i < stats.length; i++) {
    stat_views.push(
      <p>
        {stats[i].key} {stats[i].count}
      </p>
    );
  }

  return stat_views;
};

const GlobalStatistics = (props) => {
  const { all, average, positive } = props;

  return (
    <div>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {(positive / all) * 100}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [average, setAverage] = useState(0);
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(0);

  const calculateAverage = (all, good, bad) => {
    return (good - bad) / all;
  };

  const onGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setPositive(positive + 1);
    setAverage(calculateAverage(all, good, bad));
  };

  const onBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(calculateAverage(all, good, bad));
  };

  const onNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>

      <button id="btnGood" onClick={onGoodClick}>
        Good
      </button>

      <button id="btnNeutral" onClick={onNeutralClick}>
        Neutral
      </button>

      <button id="btnBad" onClick={onBadClick}>
        Bad
      </button>

      <h1>Statistics</h1>
      <StatisticView
        stats={[
          {
            key: "good",
            count: good,
          },
          {
            key: "bad",
            count: bad,
          },
          {
            key: "neutral",
            count: neutral,
          },
        ]}
      />

      <GlobalStatistics all={all} average={average} positive={positive} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
