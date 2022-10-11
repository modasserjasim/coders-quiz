import React, { useContext } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, Cell, ComposedChart, Legend, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../../layouts/Main';

const COLORS = ['#0088FE', '#4bd3ee', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Statistics = () => {
    const quizTopics = useContext(QuizContext);
    return (
        <div className='sm:container mx-auto sm:p-6 py-10 lg:px-32 md:py-36'>
            <h2 className='text-4xl text-center font-bold pb-4'>Quiz Statistics</h2>
            <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>

            <div className='grid md:grid-cols-3 gap-5 mx-auto mt-16'>
                <div className='h-80 shadow-md py-10 border border-gray-50 rounded-sm mx-4'>
                    <h2 className='text-center pb-4 text-2xl'>Area Chart</h2>
                    <ResponsiveContainer>
                        <AreaChart data={quizTopics}
                            margin={{ top: 10, right: 30, left: 0, bottom: 15 }}>
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
                <div className='h-80 shadow-md border border-gray-50 rounded-sm py-10 mx-4'>
                    <h2 className='text-center pb-4 text-2xl'>Composed Chart</h2>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={quizTopics}
                            margin={{
                                top: 10,
                                right: 20,
                                bottom: 15,
                                left: 0,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" barSize={20} fill="#4bd3ee" />
                            <Line type="monotone" dataKey="id" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className='h-80 shadow-md border border-gray-50 rounded-sm py-10 mx-4'>
                    <h2 className='text-center pb-4 text-2xl'>PieChart</h2>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={quizTopics}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="total"
                            >
                                {quizTopics.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Statistics;