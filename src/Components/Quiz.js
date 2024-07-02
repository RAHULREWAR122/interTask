import React, { useState } from 'react';
import Question from './Questions';
import Score from './Score';

const questions = [
  {
    question: "What is the full form of HTML?",
    options: ["High Tech Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["ul", "ol", "li", "ulList"],
    answer: "ul"
  },
  {
    question: "In CSS, which property is used to change the background color of an element?",
    options: ["color", "text-color", "background-color", "border"],
    answer: "background-color"
  },
  {
    question: "Which is not semantic tag in HTML? ",
    options: ["footer", "aside", "div", "nav"],
    answer: "div"
  },
   {
    question: "What does the CSS acronym CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },

   
];


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    
    const handleAnswer = (option) => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      const nextQuestionIndex = currentQuestion + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestion(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    };
  
    const handleNextQues = () => {
      const nextQuestionIndex = currentQuestion + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestion(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    };
    
    const handleLastQues = () => {
      const prevQuestionIndex = currentQuestion - 1;
      if (prevQuestionIndex >= 0) {
        setCurrentQuestion(prevQuestionIndex);
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {showScore ? (
          <Score score={score}  total={questions.length} />
        ) : (
          <>
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              handleAnswer={handleAnswer}
              currentQuestion={currentQuestion}
            />
            <div className="flex border-2 w-[300px] justify-between mt-4">
              {currentQuestion > 0 && (
                <button onClick={handleLastQues} className="text-[20px]  hover:text-blue-400">
                  Previous
                </button>
              )}
              {currentQuestion < questions.length - 1 && (
                <button onClick={handleNextQues} className="text-[20px] hover:text-blue-400">
                  Next
                </button>
              )}
            {currentQuestion === 4   && <button className="text-[20px] hover:text-blue-400">Result</button>}  
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Quiz;