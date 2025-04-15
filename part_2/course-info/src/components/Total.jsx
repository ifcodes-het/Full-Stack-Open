import React from "react";

const Total = (props) => {
  const parts = props.parts;

  const numberOfExercises = parts.reduce(
    (acc, part) => acc + part.exercises,
    0
  );

  return <b>Number of exercises {numberOfExercises}</b>;
};

export default Total;
