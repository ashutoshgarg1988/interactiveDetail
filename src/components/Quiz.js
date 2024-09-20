import React, { useState } from "react";
import "./Quiz.css";

const quizData = [
  {
    question: "When was Mahatma Gandhi born?",
    options: ["1865", "1869", "1872", "1880"],
    answer: "1869",
    feedback: "Gandhi was born on October 2, 1869.",
  },
  {
    question: "What was the main purpose of Gandhi's Salt March?",
    options: [
      "To fight for Hindu-Muslim unity",
      "To protest against the salt tax imposed by the British",
      "To demand India's independence",
      "To abolish child labor",
    ],
    answer: "To protest against the salt tax imposed by the British",
    feedback:
      "The Salt March was a 240-mile protest against the British salt tax, a pivotal act of civil disobedience.",
  },
  {
    question: "Which year did India gain independence?",
    options: ["1940", "1945", "1947", "1950"],
    answer: "1947",
    feedback: "India gained independence from British rule on August 15, 1947.",
  },
  {
    question: "Who assassinated Mahatma Gandhi?",
    options: [
      "Bhagat Singh",
      "Jawaharlal Nehru",
      "Nathuram Godse",
      "Subhas Chandra Bose",
    ],
    answer: "Nathuram Godse",
    feedback:
      "Nathuram Godse, a Hindu nationalist, assassinated Gandhi on January 30, 1948.",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  return (
    <div className="quiz">
      {quizFinished ? (
        <div className="quiz-results">
          <h2>Quiz Finished!</h2>
          <p>
            Your score: {score}/{quizData.length}
          </p>
          <p>
            {score === quizData.length
              ? "Excellent! You got all the answers correct!"
              : score > quizData.length / 2
              ? "Good job! You did well."
              : "Keep learning! You'll get there."}
          </p>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>
            Question {currentQuestionIndex + 1} of {quizData.length}
          </h2>
          <p>{currentQuestion.question}</p>
          <div className="quiz-options">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`quiz-option ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>

          {!showFeedback ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedOption === null}
              className="submit-btn"
            >
              Submit Answer
            </button>
          ) : (
            <div className="quiz-feedback">
              <p>
                {selectedOption === currentQuestion.answer
                  ? "Correct!"
                  : "Incorrect!"}
              </p>
              <p>{currentQuestion.feedback}</p>
              <button onClick={handleNextQuestion} className="next-btn">
                {currentQuestionIndex < quizData.length - 1
                  ? "Next Question"
                  : "See Results"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
