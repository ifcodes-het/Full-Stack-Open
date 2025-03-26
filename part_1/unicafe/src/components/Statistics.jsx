import React from "react";
import Header from "./Header";
import Feedback from "./Feedback";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const handleAverage = () => {
    return total / 3;
  };

  const positivePercentage = (good / total) * 100;

  console.log({ positivePercen: good });

  return (
    <div>
      <h2>Statistics</h2>
      <Feedback feedback="Good" value={good} />
      <Feedback feedback="Neutral" value={neutral} />
      <Feedback feedback="Bad" value={bad} />
      <Feedback feedback="All" value={total} />
      <Feedback feedback="Average" value={handleAverage()} />
      <Feedback feedback="Positive" value={`${positivePercentage || 0}%`} />
    </div>
  );
};

export default Statistics;
