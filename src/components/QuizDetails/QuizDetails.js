import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quiz = quizDetails.data;
    const { name, questions, total } = quiz;

    return (
        <div className='p-6 py-10 lg:px-32 md:py-16'>
            <div className='container mx-auto'>
                <h2 className='text-4xl text-center font-bold mb-1'>Quiz of {name}</h2>
                <p className='text-xl text-center pb-4'>No. of {name} Questions: <span className='bg-cyan-300 p-1 px-2 rounded-full font-bold'>{total}</span></p>
                <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>
                {
                    questions.map((quizQuestion, index) => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion} index={index}></QuizQuestion>)
                }

            </div>
            <div className='flex justify-center items-center'>
                <button className="px-10 py-5 text-2xl font-semibold tracking-wide rounded-md bg-cyan-400 text-gray-900 mt-3 hover:bg-cyan-200 transition delay-75">SUBMIT QUIZ</button>
            </div>

        </div>
    );
};

export default QuizDetails;