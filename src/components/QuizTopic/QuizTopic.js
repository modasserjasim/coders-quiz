import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className="rounded-md shadow-md ">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md bg-gray-200" />
            <div className="p-4 ">
                <div className='flex justify-between items-center flex-wrap'>
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <h3 className='text-lg'>Questions: <span className='bg-cyan-200 p-1 px-2 rounded-full font-bold'>{total}</span></h3>
                </div>
                <div>
                    <Link to={`/quiz/${id}`} type="button" className="flex items-center justify-center p-2 font-semibold tracking-wide rounded-md bg-cyan-400 text-gray-900 mt-3 hover:bg-cyan-200 transition delay-75">
                        Start Quiz
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </Link>
                </div>

            </div>

        </div>
    );
};

export default QuizTopic;