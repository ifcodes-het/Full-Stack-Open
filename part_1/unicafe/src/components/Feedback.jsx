import React from "react";

const Feedback = ({ feedback, value }) => {
  return <div>
    <p>{feedback} {value}</p>
  </div>;
};

export default Feedback;
