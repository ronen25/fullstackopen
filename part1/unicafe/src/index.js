import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if (text !== "Positive") {
    return (
      <p>
        {text} {value}
      </p>
    );
  } else {
    return (
      <p>
        {text} {value}%
      </p>
    );
  }
};

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <Statistic text="Good" value={good} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="Neutral" value={neutral} />

        <Statistic text="All" value={all} />
        <Statistic text="Average" value={average} />
        <Statistic text="Positive" value={(positive / all) * 100} />
      </div>
    );
  }
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

      <Button id="btnGood" text="Good" handleClick={onGoodClick} />
      <Button id="btnNeutral" text="Neutral" handleClick={onNeutralClick} />
      <Button id="btnBad" text="Bad" handleClick={onBadClick} />

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
