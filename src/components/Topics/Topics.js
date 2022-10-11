import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import QuizTopic from '../QuizTopic/QuizTopic';

const Topics = () => {
    const quizTopics = useContext(QuizContext);
    // console.log(quizTopics);
    return (
        <div className='container mx-auto p-6 py-10 lg:px-32 md:py-16'>
            <h2 className='text-4xl font-bold pb-4'>Quiz Topics</h2>
            <p className='w-28 p-0.5 bg-cyan-400'></p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 md:py-16'>
                {
                    quizTopics.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Topics;