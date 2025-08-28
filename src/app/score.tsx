"use client";
import type { QuizResult } from "./page";

interface ScoreProps {
  show: boolean;
  result: QuizResult;
  onNext: () => void;
}

export default function Score({ show, result, onNext }: ScoreProps) {
  return show ? (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className=" lg:w-1/2 text-center lg:text-left">
          <div className="text-2xl lg:text-4xl font-light mb-4 leading-tight">Quiz Completed</div>
          <div className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Your score:</div>
          <div className="my-5">
            <div className="w-full bg-slate-300 dark:bg-slate-700 p-10 rounded text-center">
              <div className="text-6xl font-bold ">
                {result.score} / {result.total}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={onNext}
              className="text-lg bg-gradient-to-r from-purple-600 to-blue-600  px-10 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
