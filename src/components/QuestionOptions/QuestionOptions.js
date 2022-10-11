import React from 'react';

const QuestionOptions = ({ option, handleAnswer }) => {
    // console.log(option);
    return (
        <div className='border-2 border-cyan-500 rounded-md p-4 m-2 flex items-center'>
            <label onClick={() => handleAnswer(option)} className="inline-flex items-center">
                <input type="radio" className="form-radio" name="radio-sizes" value="2"></input>
                <span className="ml-3 text-md">{option}</span>
            </label>
        </div>
    );
};

export default QuestionOptions;