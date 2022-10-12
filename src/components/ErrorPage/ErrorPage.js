import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-32">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 text-gray-400">But don't worry, you can find plenty of other things on our homepage.</p>
                <Link to="/" className="px-8 py-3 font-semibold rounded bg-cyan-400 text-gray-900">Back to homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;