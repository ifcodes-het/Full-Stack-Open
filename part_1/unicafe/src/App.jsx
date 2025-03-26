import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header />
      <div>
        <Button buttonText="Good" onClick={() => setGood(good + 1)} />
        <Button buttonText="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button buttonText="Bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
