import React from "react";
import Header from "./Header";
import Feedback from "./Feedback";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const handleAverage = () => {
    return total / 3;
  };

  const positivePercentage = (good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table cellPadding={4}>
        <tbody>
          <Feedback feedback="Good" value={good} />
          <Feedback feedback="Neutral" value={neutral} />
          <Feedback feedback="Bad" value={bad} />
          <Feedback feedback="All" value={total} />
          <Feedback feedback="Average" value={handleAverage()} />
          <Feedback
            feedback="Positive"
            value={`${(positivePercentage || 0).toFixed(2)}%`}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
