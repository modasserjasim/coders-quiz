import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../../layouts/Main';

const Statistics = () => {
    const quizTopics = useContext(QuizContext);
    return (
        <div className='sm:container mx-auto sm:p-6 py-10 lg:px-32 md:py-20'>
            <h2 className='text-4xl text-center font-bold pb-4'>Quiz Statistics</h2>
            <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>

            <div className='w-12/12 sm:w-8/12 h-80 mx-auto mt-16'>
                <ResponsiveContainer>
                    <AreaChart data={quizTopics}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTotalQuiz" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4bd3ee" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#4bd3ee" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorId" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#4bd3ee" fillOpacity={1} fill="url(#colorTotalQuiz)" />
                        <Area type="monotone" dataKey="id" stroke="#8884d8" fillOpacity={1} fill="url(#colorId)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;