import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-50 py-10 sm:py-20 px-4">
            <h2 className='text-4xl text-center font-bold pb-4'>3 React JS QA</h2>
            <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>
            <div className="container bg-white max-w-4xl px-5 sm:px-10 my-7 py-6 mx-auto rounded-lg shadow-sm sm:mt-16">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Question 1</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-cyan-400 dark:text-gray-900">ReactJS</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold hover:underline">What is the Purpose of React Router?</h2>
                    <p className="mt-2">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                </div>

            </div>
            <div className="container bg-white max-w-4xl px-5 sm:px-10 my-7 py-6 mx-auto rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Questions 2</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-cyan-400 dark:text-gray-900">ReactJS</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold hover:underline">How does context API Works?</h2>
                    <p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>

            </div>
            <div className="container bg-white max-w-4xl px-5 sm:px-10 my-7 py-6 mx-auto rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Questions 3</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-cyan-400 dark:text-gray-900">ReactJS</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold hover:underline">What is useRef Hook?</h2>
                    <p className="mt-2">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;