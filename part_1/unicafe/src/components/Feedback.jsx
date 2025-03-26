import React from "react";

const Feedback = ({ feedback, value }) => {
  return (
    <tr>
      <td>{feedback}</td>
      <td>{value}</td>
    </tr>
  );
};

export default Feedback;
