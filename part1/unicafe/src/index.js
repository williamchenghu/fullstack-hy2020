import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GOOD_VALUE = 1;
const NEUTRAL_VALUE = 0;
const BAD_VALUE = -1;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  const calcAllClicks = () => good + neutral + bad;

  const calcAverageClicks = () =>
    (good * GOOD_VALUE + neutral * NEUTRAL_VALUE + bad * BAD_VALUE) / calcAllClicks();

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {calcAllClicks()}</div>
      <div>average {calcAverageClicks()}</div>
      <div>positive {(good / calcAllClicks()) * 100} %</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
