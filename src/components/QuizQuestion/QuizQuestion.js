import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import './QuizQuestion.css'

const QuizQuestion = ({ quizQuestion, index, correctCount, setCorrectCount }) => {
    const { id, question, correctAnswer, options } = quizQuestion;
    const questionName = question.replace(/(<([^>]+)>)/ig, '');

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [createClass, setCreateClass] = useState("answer");

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
        if (option === correctAnswer) {
            setCreateClass("correct-answer")
            const correctAnswer = correctCount + 1;
            setCorrectCount(correctAnswer);
            toast.success('Your answer is correct!', { autoClose: 1500 });
        } else {
            setCreateClass("wrong-answer")
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
            <div className="md:w-8/12 p-5 drop-shadow-xl shadow-gray-200 shadow-2xl mx-auto rounded-md my-10 border">
                <div className="flex justify-between items-start pb-4 border-bottom">
                    <div className="text-md sm:text-xl font-semibold">
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
                        options.map((option) => (
                            <div key={option} className={selectedAnswer === option ? createClass : "answer"}>
                                <label className="inline-flex items-center">
                                    <input onClick={() => handleAnswer(option)} type="radio" className="form-radio" name={id} value={option} />
                                    <span className="ml-3 text-md">{option}</span>
                                </label>
                            </div>))
                    }
                </div>

            </div>
        </div>
    );
};

export default QuizQuestion;