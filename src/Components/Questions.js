import React from 'react';

const Question = ({currentQuestion , question, options, handleAnswer }) => {
  return (
    <div className="flex flex-col items-center">
      <span className='flex mr-4'> <h2 className="text-2xl text-blue-300 mb-4">Q:{currentQuestion + 1}</h2> 
      <h2 className="text-2xl mb-4">{question}</h2>
      
      </span> 
      
      <div className="w-full max-w-md">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="block w-full p-4 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
