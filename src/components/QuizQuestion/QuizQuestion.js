import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import QuestionOptions from '../QuestionOptions/QuestionOptions';

const QuizQuestion = ({ quizQuestion, index }) => {
    const { id, question, correctAnswer, options } = quizQuestion;
    const questionName = question.replace(/(<([^>]+)>)/ig, '');

    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success('Your answer is correct!', { autoClose: 1500 });
        } else {
            toast.error('Oops! incorrect answer!', { autoClose: 1500 });
        }
    }
    const handleShowAnswer = () => {
        Swal.fire({
            icon: 'success',
            title: 'The correct answer is:',
            html: correctAnswer,
            confirmButtonColor: '#4bd3ed',
            confirmButtonText: 'OKAY',
        })
    }
    return (
        <div>
            <div className="md:w-8/12 p-5 shadow-lg mx-auto rounded-md my-10">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center text-md sm:text-xl font-semibold">
                        Quiz {index + 1}: {questionName}
                    </div>
                    <button onClick={() => handleShowAnswer()} title='Show Answer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </button>
                </div>
                <div className="grid sm:grid-cols-2">
                    {
                        options.map(option => <QuestionOptions key={option} option={option} handleAnswer={handleAnswer} id={id}></QuestionOptions>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;