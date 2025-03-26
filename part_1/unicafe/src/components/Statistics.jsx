import React from "react";
import Header from "./Header";
import Feedback from "./Feedback";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <Feedback feedback="Good" value={good} />
      <Feedback feedback="Neutral" value={neutral} />
      <Feedback feedback="Bad" value={bad} />
    </div>
  );
};

export default Statistics;
