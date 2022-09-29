import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog-heading'>
                <h1>Lets have some study on React Basic</h1>
            </div>
           <div className='qna'>
                <h2> Question 01: How does react work ?</h2>
                <p> <b>Answer:</b> <br /> ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. <br />

                Its important to note that ReactJS is not a JavaScript framework. Thats because its only responsible for rendering the components of an applications view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p> <br /> <br />


                <h2> Question 02: Write down the different between 'Props' and 'State'.</h2>
                 <p>
                 <b>Answer:</b><br /> <b>State</b>: <br /> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br /> <br />

                 <b>Props</b>: <br /> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                 </p>  <br /> <br />
                <h2> Question 03: Use of useEffect except fetch.</h2>
                <p><b>Answer:</b> <br /> The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, </p>
                
           </div>
        </div>
    );
};

export default Blog;