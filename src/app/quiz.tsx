"use client";
import { useState, useEffect, createRef } from "react";
import { questions as allQuestions } from "./questions";
import type { Question } from "./questions";
import type { QuizProps } from "./page";

enum AlphaIndex {
  A,
  B,
  C,
  D,
}

export default function Quiz({ show, onSumbit }: QuizProps) {
  const [score, setScore] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showIsCorrect, setShowIsCorrect] = useState(false);
  const submitBtnRef = createRef<HTMLButtonElement>();

  useEffect(() => {
    setQuestions(allQuestions);
    setIndex(0);
    setScore([0,0,0,0,0,0,0,0,0,0]);
    setShowIsCorrect(false);
    setSelectedOptionIndex(null);
  }, [show]);

  const selectOption = (i: number) => {
    setSelectedOptionIndex(i);
    if (submitBtnRef.current) {
      submitBtnRef.current.focus();
    }
  };

  const submitOption = () => {
    // needs changing to get vector for question
    if (selectedOptionIndex === null) return;
    // Check if the selected option is correct
    let newScore = score;
    //this may need debugging
    for (var i=0; i < 10; i++){
      newScore[i] += questions[index].options[selectedOptionIndex].vec[i]
    }
    setScore(newScore);
    setTimeout(() => {
      setSelectedOptionIndex(null);
      // Move to the next question or finish the quiz
      if (index < questions.length - 1) {
        setIndex(index + 1);
        setSelectedOptionIndex(null); // Reset selected option for next question
      } else {
        const result = { score: newScore, total: questions.length };
        onSumbit(result);
      }
    }, 1000);
  };

  return show && questions.length ? (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left side - questions */}
        <div className=" lg:w-1/2 text-center lg:text-left text-2xl">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: String(Math.floor((index / questions.length) * 100) || 0) + "%" }}
            ></div>
          </div>
          <div>
            Q{index + 1}: {questions[index].question}
          </div>
        </div>

        {/* Right side - options cards */}
        <div className="lg:w-1/2 w-full max-w-md space-y-4">
          {questions[index].options.map((option, i) => (
            <button
              key={"q-" + index + "-" + i}
              className={`
                  flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 w-full text-left shadow-lg border border-slate-300 dark:border-slate-600 ${
                    showIsCorrect
                      ? option.vec
                        ? "bg-green-700 dark:bg-green-900"
                        : "bg-red-800 dark:bg-red-900"
                      : selectedOptionIndex === i
                      ? "bg-slate-200 dark:bg-slate-600"
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                  } ${selectedOptionIndex === i ? "shadow-xl scale-105" : "hover:scale-102"}
                `}
              onClick={() => selectOption(i)}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center  text-xl font-bold mr-4`}>
                {AlphaIndex[i]}
              </div>
              <div className="flex-1">
                <div className=" font-semibold text-lg">{option.text}</div>
              </div>
            </button>
          ))}
          <button
            type="submit"
            onClick={submitOption}
            className="mt-4 w-full"
            disabled={selectedOptionIndex === null}
            ref={submitBtnRef}
          >
            <div
              className={`text-lg bg-gradient-to-r from-purple-600 to-blue-600  px-10 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg ${
                selectedOptionIndex === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {index < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </div>
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
