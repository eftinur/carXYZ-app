import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 gap-6 w-3/4 mx-auto'>
             <h2 className='text-3xl'>Our Blogs:</h2>
            <div className='border border-solid rounded-lg my-3 p-4'>
                <h3 className='text-2xl'>What are the different ways to manage a state in a React application?</h3>
                <p>
                There are four main types of state you need to properly manage in your React apps:
                <li>Local State</li>
                <li>Global State</li>
                <li>Servver State</li>
                <li>URL State</li>
                Local (UI) state – Local state is data we manage in one or another component. <br />

                Local state is most often managed in React using the useState hook. <br />

                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />

                Global (UI) state – Global state is data we manage across multiple components. <br />
                Server state – Data that comes from an external server that must be integrated with our UI state. <br />

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />

                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />

                Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />

                URL state – Data that exists on our URLs, including the pathname and query parameters. <br />

                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />

                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='border border-solid rounded-lg my-3 p-4'>
                <h3 className='text-2xl'>How does prototypical inheritance work?</h3>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div className='border border-solid rounded-lg my-3 p-4'>
                <h3 className='text-2xl'>What is a unit test? Why should we write unit tests?</h3>
                <p>
                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />

                How unit tests work? <br />
                A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. <br />

                Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base. <br />

                Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed. <br />

                Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.

                </p>
            </div>
            <div className='border border-solid rounded-lg my-3 p-4'>
                <h3 className='text-2xl'>React vs. Angular vs. Vue?</h3>
                <p>
                <span className='text-xl'>Angular JS</span> <br />
                AngularJS was first released by Google in 2010 as a framework for building web applications. The Angular 2 framework appeared in 2016, which is a total rewrite of the original AngularJS framework. There have been several new versions since then. The most recent is currently Angular 13. <br />

                A lot of single-page applications are created using this JS framework, which is open-source and free. As it is based on the MVW architecture, it has become a very popular choice for building cross-platform apps. It offers both client-side MVC and MVVM architecture, which makes the development of JavaScript applications easier for developers. A lot of businesses are using the advantages of outsourcing their development to the AngularJs development company. <br />

                <span className='text-xl'>React</span> <br />    
                In 2013, Facebook released React as a tool to combat the problems triggered by high volumes of traffic that were generated by its Facebook ads. However, it also resolved issues related to coding and maintenance. In short, it is a popular framework for JS developers who want to develop single-page websites as well as mobile applications. The Js framework is open-source, accessible to everyone, and contains features that will help you create iPhone and Android applications. Nowadays, large businesses are using React to build their web apps. In addition, it is also well known for its ability to render top-notch support for the development of interactive user interfaces. As of October 2020, the latest stable version of the application came out 17. X. <br />

                It is actually a JavaScript library used to build UIs for web and mobile applications. The technology is now supported by both Facebook and Instagram (Now Meta) and has developed into an essential part of the endless feed functionality in these applications. In terms of React’s sphere of use, it is a JS library with a limited range of applications, however, when combined with other libraries, it becomes a powerful solution, making it a competitive tool against Angular.  <br />


                <span className='text-xl'>Vue</span> <br />    
                Evan You, a former employee of Google who worked on Angular when he was a Googler, created the Vue framework. Vue.JS is a lightweight, powerful, open-source framework that can handle all kinds of web applications and be released in the year 2014. In terms of the development of single-page applications, the application of component composition technique is in high demand, particularly for the user interface. As a result of the combination of React.js and AngularJS, developers can develop beautiful, engaging, and high-quality web applications with Vue js.

                Vue.js is generally defined as a web framework for developing user interfaces in a progressive manner. Vue was built so that users could adopt the framework incrementally, as opposed to Angular. <br />

                Vue 3 introduces some exciting new features and updates to Vue.js. Among the new features are the accurate production of standalone reactive objects, async error handling, the introduction of Slots, and more. <br />

                Vue JS has been getting a lot of attention lately as one of the hottest topics to discuss when it comes to the framework. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;