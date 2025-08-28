"use client";
interface Option {
  text: string;
  isCorrect: boolean;
}
interface Question {
  id: number;
  question: string;
  options: [Option, Option, Option, Option];
}
export type { Question, Option };

export const questions: Array<Question> = [
  {
    id: 1,
    question: "What does the `this` keyword refer to in a regular function (non-arrow) in JavaScript?",
    options: [
      { text: "The global object", isCorrect: true },
      { text: "The function itself", isCorrect: false },
      { text: "The parent function", isCorrect: false },
      { text: "It’s always `undefined`", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which CSS property makes an element invisible without removing it from the document flow?",
    options: [
      { text: "visibility: hidden", isCorrect: true },
      { text: "display: none", isCorrect: false },
      { text: "opacity: 0", isCorrect: false },
      { text: "z-index: -1", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Which JavaScript method removes the last element of an array?",
    options: [
      { text: "shift()", isCorrect: false },
      { text: "pop()", isCorrect: true },
      { text: "splice()", isCorrect: false },
      { text: "remove()`", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What does the `<section>` tag in HTML represent?",
    options: [
      { text: "A paragraph", isCorrect: false },
      { text: "A generic container", isCorrect: false },
      { text: "A standalone thematic grouping", isCorrect: true },
      { text: "A navigation bar`", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "In Flexbox, what does `flex: 1` do?",
    options: [
      { text: "Hides the element", isCorrect: false },
      { text: "Forces the element to shrink only", isCorrect: false },
      { text: "Allows the element to grow and fill space", isCorrect: true },
      { text: "Makes the element fixed-width`", isCorrect: false },
    ],
  },
];
