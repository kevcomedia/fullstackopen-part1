import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const MostVotedAnecdote = ({ anecdotes, selected, points }) => {
  const maxPoints = Math.max(...points);
  const maxPointsIndex = points.indexOf(maxPoints);

  return (
    <Anecdote
      title="Anecdote with most votes"
      anecdote={anecdotes[maxPointsIndex]}
      votes={maxPoints}
    />
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const handleSelectedClick = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);
  };

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={points[selected]}
      />
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleSelectedClick} text="next anecdote" />
      <MostVotedAnecdote
        anecdotes={anecdotes}
        selected={selected}
        points={points}
      />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of development time.',
  'Any fool can write code that a computer can understand. Good programers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
