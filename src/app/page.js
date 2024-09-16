'use client';

import { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Question from '@/components/Question';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateClick = async () => {
    if (questions.length > 0) {
      setQuestions([]);
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/create-questions');
      const data = response.data;
      setQuestions(data.questions);
    } catch (error) {
      console.error('Error creating questions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className='py-10'>
        <header>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900'>
              使用ChatGPT为你生成新问题
            </h1>
          </div>
        </header>
        <main>
          <div className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
            {questions.map((questionData, index) => (
              <Question
                key={index}
                questionData={questionData}
                questionNumber={index + 1}
              />
            ))}
          </div>
          <div className='flex justify-center mb-2'>
            <button
              onClick={handleCreateClick}
              disabled={isLoading}
              className={`px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md hover:bg-indigo-700 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className='flex items-center'>
                  <svg
                    className='animate-spin h-5 w-5 mr-3 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v8z'
                    ></path>
                  </svg>
                  正在生成问题... <br />
                  这可能需要最多60秒
                </div>
              ) : (
                '创建10个新问题'
              )}
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
