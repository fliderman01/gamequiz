import React, { useState } from 'react';
import DarkMode from './components/DarkMode';
import data from './data.json';
import './style.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [pages, setPages] = useState(0);

  // import questins from data.json
  const questions = data.questions;

  // starts Quiz
  const startQuiz = () => {
    setPages(1);
  };

  // Play again
  const playAgain = () => {
    setPages(0);
    setCurrentQuestion(0);
    setScore(0);
  };

  // Next question
  const nextQuestion = (correct) => {
    correct && setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
    // show results when questions will end
    currentQuestion == questions.length - 1 && setPages(2);
  };

  // render: start Quiz, Questions and Results
  const renderQuiz = () => {
    if (pages == 0) {
      return (
        <div className="startQuiz bg">
          <h2>General Knowledge Quiz</h2>
          <button className="StartBtn" onClick={startQuiz}>
            Start Quiz?
          </button>
        </div>
      );
    } else if (pages == 1) {
      return (
        <div className="questions bg">
          <div className="questionText">
            <h3>
              Question {currentQuestion + 1} out of {questions.length}:
            </h3>
            <p>{questions[currentQuestion].questionTxt}</p>
          </div>
          <div className="answers">
            {questions[currentQuestion].answerOpts.map((answerOption) => (
              <button
                key={Math.floor(Math.random() * 9999)}
                onClick={() => nextQuestion(answerOption.isCorrect)}
              >
                {answerOption.answerTxt}
              </button>
            ))}
          </div>
        </div>
      );
    } else if (pages == 2) {
      return (
        <div className="results bg">
          <h2>
            You're Score is {score} out of {questions.length}
          </h2>
          <button className="playAgainBtn" onClick={playAgain}>
            Play again
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <DarkMode />
      {renderQuiz()}
    </div>
  );
}
