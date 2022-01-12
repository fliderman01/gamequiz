import React from 'react';
import DarkMode from './components/DarkMode';
import './style.css';

export default function App() {
  return (
    <div>
      <DarkMode />

      <div className="startQuiz bg">
        <h2>General Knowledge Quiz</h2>
        <button className='StartBtn'>Start Quiz?</button>
      </div>

      <div className="questions bg">
        <div className="questionText">
          <h3>Question 1 out of 14:</h3>
          <p>Who is the Queen of England?</p>
        </div>
        <div className="answers">
          <button>Elisabeth II</button>
          <button>Meeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeee</button>
          <button>Antony Hopkins</button>
          <button>Jennifer Lawrence of arabia</button>
        </div>
      </div>

      <div className="results bg">
        <h2>You're Score is 10 out of 14</h2>
        <button className="playAgainBtn">Play again</button>
      </div>
    </div>
  );
}
// if display == 0 show startQuiz else if display == 1 show questions else show results;
// display initial = 0; startQuiz onClick = setDisplay = 1; if nextQuestion == questions.length eetDisplay = 2