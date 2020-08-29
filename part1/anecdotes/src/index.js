import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);
  const [anecdotes, setAnecdotes] = useState(props.anecdotes);

  const onVoteClicked = () => {
    const newAnecdotes = [...anecdotes];

    newAnecdotes[selected].votes++;

    // Set new max index if needed
    if (newAnecdotes[selected].votes > newAnecdotes[maxVotesIndex].votes)
      setMaxVotesIndex(selected);

    setAnecdotes(newAnecdotes);
  };

  const onNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected].anecode}</p>
      <p>
        <b>Votes cast: {anecdotes[selected].votes}</b>
      </p>

      <button id="btnVote" onClick={onVoteClicked}>
        Vote
      </button>

      <button id="btnNextAnecdote" onClick={onNextAnecdote}>
        Next Anecdote
      </button>

      <h1>
        Anecdote with the most votes
      </h1>
      <p>{anecdotes[maxVotesIndex].anecode}</p>
      <p>
        <b>Votes cast: {anecdotes[maxVotesIndex].votes}</b>
      </p>
    </div>
  );
};

const anecdotes = [
  { anecode: "If it hurts, do it more often", votes: 0 },
  { anecode: "Adding manpower to a late software project makes it later!", votes: 0 },
  { anecode: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", votes: 0 },
  { anecode: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", votes: 0 },
  { anecode: "Premature optimization is the root of all evil.", votes: 0 },
  { anecode: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", votes: 0 }
];

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
