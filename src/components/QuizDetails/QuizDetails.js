import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quiz = quizDetails.data;
    const questions = quiz.questions;
    // console.log(questions);
    return (
        <div>
            <div className='container mx-auto p-6 py-10 lg:px-32 md:py-16'>
                <h2 className='text-4xl text-center font-bold pb-4'>Quiz of {quiz.name}</h2>
                <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>
                {
                    questions.map((quizQuestion, index) => <QuizQuestion key={quizQuestion.id} quizQuestion={quizQuestion} questions={questions} index={index}></QuizQuestion>)
                }

            </div>
        </div>
    );
};

export default QuizDetails;