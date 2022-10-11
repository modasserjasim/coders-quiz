import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quiz = quizDetails.data;
    const { name, questions, total } = quiz;
    return (
        <div>
            <div className='container mx-auto p-6 py-10 lg:px-32 md:py-16'>
                <h2 className='text-4xl text-center font-bold mb-1'>Quiz of {name}</h2>
                <p className='text-xl text-center pb-4'>No. of {name} Questions: <span className='bg-cyan-300 p-1 px-2 rounded-full font-bold'>{total}</span></p>
                <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>
                {
                    questions.map((quizQuestion, index) => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion} index={index}></QuizQuestion>)
                }

            </div>
        </div>
    );
};

export default QuizDetails;