"use client";
import { useState, useEffect } from "react";
import Welcome from "./welcome";
import Quiz from "./quiz";
import Score from "./score";

export interface QuizResult {
  score: number[]; //this needs to be a list
  total: number; // we dont need a total? maybe do need to keep questions 
}
export interface QuizProps {
  show: boolean;
  onSumbit: (result: QuizResult) => void;
}

export default function Home() {
  const [theme, setTheme] = useState<string | null>(null);
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [scoreResult, setScoreResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    initGame();
  }, []);

  function initGame() {
    setTheme(localStorage.getItem("theme") || "dark");
    setShowStart(true);
    setShowQuiz(false);
    setShowScore(false);
    setScoreResult(null);
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };
  const onSumbit = (result: QuizResult) => {
    console.log("Quiz result:", result);
    setShowQuiz(false);
    setShowStart(false);
    if (result.total) {
      setShowScore(true);
      setScoreResult(result);
    } else {
      initGame();
    }
  };
  const restartQuiz = () => {
    initGame();
    startQuiz();
  };
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-white relative overflow-hidden ${theme}`}
    >
      <div id="colorSwitch" className="absolute top-4 right-4">
        <div>
          <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                style={{ fill: "yellow" }}
              >
                <path d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                style={{ fill: "blue" }}
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,12,4c.16,0,.316.015.473.024a9.908,9.908,0,0,0,6.194,12.388A8,8,0,0,1,12,20Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Welcome show={showStart} onNext={startQuiz} />
      <Quiz show={showQuiz} onSumbit={onSumbit} />
      <Score show={showScore} result={scoreResult!} onNext={restartQuiz} />
    </div>
  );
}
