import React from 'react';

const QuizTopic = ({ quizTopic }) => {
    const { id, name, logo } = quizTopic;
    return (
        <div className="rounded-md shadow-md ">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-78 bg-gray-200" />
            <div className="flex justify-between items-center p-4">
                <div>
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                </div>
                <button type="button" className="flex items-center justify-center p-2 font-semibold tracking-wide rounded-md bg-cyan-400 text-gray-900">
                    Start Quiz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>




                </button>
            </div>
        </div>
    );
};

export default QuizTopic;