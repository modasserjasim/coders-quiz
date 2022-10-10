import React from 'react';
import Lottie from 'lottie-react'
import coding from '../../assets/coding.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="container flex flex-col justify-center p-6 mx-auto md:py-32 md:px-10 lg:px-32 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to
                        <span className="text-cyan-400"> Coders Quiz</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">You can test your JavaScript and CSS skills with this Quiz. The test is not official, it's just a nice way to see how much you know, or don't know, about JavaScript and CSS.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link href="/topics" className="px-8 py-3 text-lg font-semibold rounded bg-cyan-400 text-gray-900">Quiz Topics</Link>
                        <Link href="/statistics" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:bg-cyan-400 transition delay-75">Statistics</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Lottie animationData={coding} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;