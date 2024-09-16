'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Question from '@/components/Question';

export default function Review() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getQuestions = async () => {
      try {
        const response = await axios.get('/api/get-questions', {
          headers: {
            'Cache-Control': 'no-store',
          },
        });
        const data = response.data;
        data.questions.reverse();
        setQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getQuestions();
  }, []);

  return (
    <>
      <Header />
      <div className='py-10'>
        <header>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900'>
              复习之前看到的问题
            </h1>
            {isLoading && (
              <div className='mt-4 mx-auto max-w-3xl px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md'>
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
                  正在检索问题... <br />
                  这可能需要最多60秒
                </div>
              </div>
            )}
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
        </main>
      </div>
    </>
  );
}
