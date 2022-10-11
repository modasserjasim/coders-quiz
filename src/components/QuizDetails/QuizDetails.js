import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizDetailsData = useLoaderData();
    const quizDetails = quizDetailsData.data;
    console.log(quizDetails);
    return (
        <div>
            <h1>This is quiz Details</h1>
        </div>
    );
};

export default QuizDetails;