import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, isClicked }) => <button onClick={isClicked}>{text}</button>;

const Votes = () => Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0);

const RandomIndex = () => Math.floor(Math.random() * anecdotes.length);

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [volted, setVolted] = useState(Votes());

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {volted[selected]} votes</p>
      <Button
        text={'vote'}
        isClicked={() => {
          const voltUpdate = [...volted];
          voltUpdate[selected] += 1;
          setVolted(voltUpdate);
        }}
      />
      <Button text={'next anecdote'} isClicked={() => setSelected(RandomIndex())} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
