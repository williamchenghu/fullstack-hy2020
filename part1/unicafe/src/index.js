import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GOOD_VALUE = 1;
const NEUTRAL_VALUE = 0;
const BAD_VALUE = -1;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <div key={text}>
    {text}: {value}
  </div>
);
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic
        text="average"
        value={
          (good * GOOD_VALUE + neutral * NEUTRAL_VALUE + bad * BAD_VALUE) / (good + neutral + bad)
        }
      />
      <Statistic text="positive" value={`${(good / (good + neutral + bad)) * 100} %`} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
