'use client';

import { useState } from 'react';

function Question({ questionData, questionNumber }) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Function to shuffle the answers array
  function shuffleArray(array) {
    const newArray = array.slice(); // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // Initialize shuffled answers state
  const [shuffledAnswers] = useState(() => shuffleArray(questionData.answers));

  const handleAnswerSelect = (index) => {
    setSelectedAnswerIndex(index);
  };

  return (
    <div className='bg-gray-100 p-6 my-6 rounded-lg'>
      <div className='flex items-start'>
        <span className='text-2xl font-bold mr-4'>{questionNumber}.</span>
        <div className='flex-1'>
          {questionData.image_url && (
            <img
              src={questionData.image_url}
              alt='Question Image'
              className='mb-4 w-1/2 h-auto mx-auto'
            />
          )}
          <p className='text-xl font-medium text-gray-900'>
            {questionData.question}
          </p>
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        {shuffledAnswers.map((answer, index) => {
          const isSelected = selectedAnswerIndex === index;
          const isCorrect = answer.correct;
          let bgColor = 'bg-white';

          if (isSelected) {
            bgColor = isCorrect ? 'bg-green-100' : 'bg-red-100';
          }

          return (
            <div
              key={index}
              className={`relative flex items-start p-4 border rounded-lg cursor-pointer ${bgColor}`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className='flex items-center h-5'>
                <input
                  type='radio'
                  name={`question-${questionNumber}`}
                  checked={isSelected}
                  onChange={() => handleAnswerSelect(index)}
                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label className='font-medium text-gray-700'>
                  {answer.text}
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {selectedAnswerIndex !== null && (
        <div className='mt-4 p-4 border-t border-gray-300'>
          <p className='text-gray-700'>
            {shuffledAnswers[selectedAnswerIndex].explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default Question;
