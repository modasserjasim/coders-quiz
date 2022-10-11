import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import QuizTopic from '../QuizTopic/QuizTopic';

const Topics = () => {
    const quizTopics = useContext(QuizContext);
    console.log(quizTopics);
    return (
        <div className='container mx-auto px-4 md:px-2'>
            <div className='container grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10 lg:px-32'>
                {
                    quizTopics.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Topics;