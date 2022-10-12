import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const QuizContext = createContext([]);
const Main = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;

    return (
        <QuizContext.Provider value={quizTopics}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Main;