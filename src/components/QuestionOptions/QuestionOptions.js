import React from 'react';

const QuestionOptions = ({ option, id, handleAnswer }) => {
    // console.log(option);
    return (
        <div className='border-2 border-cyan-500 rounded-md p-4 m-2 flex items-center'>
            <label className="inline-flex items-center">
                <input onClick={() => handleAnswer(option)} type="radio" className="form-radio" name={id} value={option} />
                <span className="ml-3 text-md">{option}</span>

            </label>
        </div>
    );
};

export default QuestionOptions;