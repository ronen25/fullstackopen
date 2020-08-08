import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;

  return (
    <div>
      <p>Good {good}</p>
      <p>Bad {bad}</p>
      <p>Neutral {neutral}</p>

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

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
        positive={positive}
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
