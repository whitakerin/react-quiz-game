"use client";
interface Option {
  text: string;
  vec: number[];

}
interface Question {
  id: number;
  question: string;
  options: [Option, Option, Option, Option]; // add more options
}
export type { Question, Option };

export const questions: Array<Question> = [
  {
    // hardcode more options
    id: 1,
    question: "What does the `this` keyword refer to in a regular function (non-arrow) in JavaScript?",
    options: [
      { text: "The global object", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "The function itself", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "The parent function", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "It’s always `undefined`", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 2,
    question: "Which CSS property makes an element invisible without removing it from the document flow?",
    options: [
      { text: "visibility: hidden", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "display: none", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "opacity: 0", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "z-index: -1",vec: [0, 0,0,0,0,0,0,0,0,0]},
    ],
  },
  {
    id: 3,
    question: "Which JavaScript method removes the last element of an array?",
    options: [
      { text: "shift()", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "pop()", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "splice()", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "remove()`", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 4,
    question: "What does the `<section>` tag in HTML represent?",
    options: [
      { text: "A paragraph", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "A generic container", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "A standalone thematic grouping", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "A navigation bar`", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 5,
    question: "In Flexbox, what does `flex: 1` do?",
    options: [
      { text: "Hides the element", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Forces the element to shrink only", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Allows the element to grow and fill space", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Makes the element fixed-width`", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
];
