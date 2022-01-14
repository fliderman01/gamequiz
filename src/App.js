import React, { useState, useEffect } from 'react';
import data from './data.json';
import DarkMode from './components/DarkMode';
import './style.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [pages, setPages] = useState(0);
  const [btnTheme, setBtnTheme] = useState(() => {
    const save = localStorage.getItem('btnTheme');
    return JSON.parse(save) || 'blueBtn';
  });
  const [cardTheme, setCardTheme] = useState(() => {
    const save = localStorage.getItem('cardTheme');
    return JSON.parse(save) || 'blue bg';
  });
  const [blueOrange, setBlueOrange] = useState(() => {
    const save = localStorage.getItem('blueOrange');
    return JSON.parse(save) || 'Blue';
  });

  useEffect(() => {
    localStorage.setItem('btnTheme', JSON.stringify(btnTheme));
    localStorage.setItem('cardTheme', JSON.stringify(cardTheme));
    localStorage.setItem('blueOrange', JSON.stringify(blueOrange));
    // toggle body style
    document.body.classList.add(btnTheme);
    return () => {
      document.body.classList.remove(btnTheme);
    };
  }, [btnTheme, cardTheme, blueOrange]);

  // import questins from data.json
  const questions = data.questions;

  // swiches theme
  const themeSwicher = (sel) => {
    if (sel) {
      setBtnTheme('orangeBtn');
      setCardTheme('bg orange');
      setBlueOrange('Blue');
      document.querySelector('.para').style.color = '#2196f3';
    } else {
      setBtnTheme('blueBtn');
      setCardTheme('bg blue');
      setBlueOrange('Orange');
      document.querySelector('.para').style.color = 'white';
    }
  };

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
        <div className={cardTheme}>
          <h2>General Knowledge Quiz</h2>
          <button className={btnTheme} id="StartBtn" onClick={startQuiz}>
            Start Quiz?
          </button>
        </div>
      );
    } else if (pages == 1) {
      return (
        <div className={cardTheme}>
          <div className="questionText">
            <h3>
              Question {currentQuestion + 1} out of {questions.length}:
            </h3>
            <p>{questions[currentQuestion].questionTxt}</p>
          </div>
          <div className="answers">
            {questions[currentQuestion].answerOpts.map((answerOption) => (
              <button
                className={btnTheme}
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
        <div className={cardTheme}>
          <h2>
            You're Score is {score} out of {questions.length}
          </h2>
          <button className={btnTheme} onClick={playAgain}>
            Play again
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="swich">
        <p className="para">{blueOrange} mode</p>
        <DarkMode themeSwicher={themeSwicher} />
      </div>
      {renderQuiz()}
    </div>
  );
}
