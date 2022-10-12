import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-50 py-10 sm:py-20 px-4">
            <h2 className='text-4xl text-center font-bold pb-4'>3 React JS Q&A</h2>
            <p className='w-28 p-0.5 bg-cyan-400 mx-auto'></p>
            <div className="container bg-white max-w-4xl px-5 sm:px-10 my-7 py-6 mx-auto rounded-lg shadow-sm sm:mt-16">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Question 1</span>
                    <p className="px-2 py-1 font-bold rounded bg-cyan-400 text-white">ReactJS</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold hover:underline">What is the Purpose of React Router?</h2>
                    <p className="mt-2">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        <br /> <br />
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                        <br /> <br />
                        It keeps track of the location and renders different (Route) s as it changes, and it also gives you tools to update the location using (Link) s and the history API.
                    </p>
                </div>

            </div>
            <div className="container bg-white max-w-4xl px-5 sm:px-10 my-7 py-6 mx-auto rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Questions 2</span>
                    <p className="px-2 py-1 font-bold rounded bg-cyan-400 text-white">ReactJS</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold hover:underline">How does context API Works?</h2>
                    <p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        <br /><br />
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </p>
                </div>

            </div>
            <div className="container bg-white max-w-4xl px-5 sm:px-10 my-7 py-6 mx-auto rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Questions 3</span>
                    <p className="px-2 py-1 font-bold rounded bg-cyan-400 text-white">ReactJS</p>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold hover:underline">What is useRef Hook?</h2>
                    <p className="mt-2">The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>
                    <div className='bg-gray-700 text-white p-3 my-5 rounded-md'>
                        <code>const refContainer = useRef(initialValue);</code>
                    </div>
                    <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>

                </div>

            </div>
        </div>
    );
};

export default Blog;