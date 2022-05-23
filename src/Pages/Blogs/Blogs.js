import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-5xl pb-6 text-center font-medium'>Blogs</h2>
            <div className='border-2 p-2 m-4 rounded-md'>
                <h3 className='text-3xl font-medium'>Q1. How will you improve the performance of a React Application?</h3>
                <p className='text-xl'>We can improve the performance of a react application by following the steps below:</p>
                <ol className='list-decimal px-4'>
                    <li className='py-2'>We should keep component state local where necessary</li>
                    <li className='py-2'>We have to memoize components to prevent unnecessary re-renders</li>
                    <li className='py-2'>We have to split code using dynamic import()</li>
                    <li className='py-2'>We should not load all images at a time, we have to render an image when it is about to display on the UI.</li>
                </ol>
            </div>
            <div className='border-2 p-2 m-4 rounded-md'>
                <h3 className='text-3xl font-medium'>Q2. What are the different ways to manage a state in a React application?</h3>
                <p className='text-xl'>There are four types of states to manage in react application. They are:</p>
                <ol className='list-decimal px-4'>
                    <li className='py-2'><b>Local State: </b>Local States are most often managed with useState() hook.</li>
                    <li className='py-2'><b>Global State: </b>Global States are not any other thing than local states, but we call them global states when we call the same state from multiple components. We can manage global states by using third party state management libraries like Zustand, Jotai and Recoll</li>
                    <li className='py-2'><b>Server State: </b>Server States are states that are used to fetch data and update them from a server. We should manage the states every time we fetch or update data. We can easily manage the data with <b>React Query and SWR</b>.</li>
                    <li className='py-2'><b>URL States: </b>URL States are states that exist on our URLs including the pathname and query parameters. We can get all the information like history, location and pathname. To manage these all things, we can use custom hooks or React Router hooks like useParams, useLocation and useHistory.</li>
                </ol>
            </div>
            <div className='border-2 p-2 m-4 rounded-md'>
                <h3 className='text-3xl font-medium'>Q3. How does Protypical Inheritance work?</h3>
                <p className='text-xl'>In javascript, an object can share other object's properties. This is called prototypical inheritance.</p>
                <p className='text-xl'>At the first time, when the prototype is called, it gets the first property of the object. After every calls of prototype, it gets the children of the previous object. And after the last children of the object, the prototype will show some javascript built-in properties. After that, the prototype will be null. This is how prototypical chaining or prototypical inheritance works.</p>
            </div>
            <div className='border-2 p-2 m-4 rounded-md'>
                <h3 className='text-3xl font-medium'>Q4. Why don't you set the state directly in react?</h3>
                <p className='text-xl'>We should never set states directly in react. Because, </p>
                <ol className='list-disc px-4'>
                    <li>If we set states directly, when we will update the data, the state may just replace all the previous data with the new data. We can't get back the data we put in the state before.</li>
                    <li>When we directly set the states directly, it doesn't set the data immediately. It create a pending transition. And after recalling the method, it replaces the previous data with the new ones,</li>
                    <li>We will loss control of state across all components.</li>
                </ol>
            </div>
            <div className='border-2 p-2 m-4 rounded-md'>
                <h3 className='text-3xl font-medium'>Q5. What is unit testing in react?</h3>
                <p className='text-xl'>Unit test is a testing systems for checking that the component renders correctly for the specified props. We implement unit test to prevent regressions. We use "Test runner" and "Testing Utilities" for unit testing in react.</p>
            </div>
        </div>
    );
};

export default Blogs;