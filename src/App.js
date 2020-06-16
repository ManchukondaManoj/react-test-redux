import React from 'react';

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

import './App.css';

function App() {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
