import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className="container ">
      <div className="bg">
        <h1>Questions and answer</h1>
        <div className="qna">
          <h2>how dose react works?</h2>
          <p>
            One of the qualities of React is its Simplicity. It uses core
            JavaScript as well as a special syntax called JSX which allows us to
            write 100% HTML inside JavaScript. Not only web applications can be
            created with React, the funny thing is that it can also be used to
            create all the nice mobile applications.
          </p>
        </div>
        <div className="qna">
          <h2>props vs state?</h2>
          <p>
            props (abbreviations of "properties") and the status of simple
            JavaScript objects. If we want to contain information that
            influences the sale of rendered, there are differences in a very
            important form: the accessories from the component (similar to the
            parameters of the function) meet the status of the administration
            within the component (similar to the variables declared inside a
            function).
          </p>
        </div>
     </div>
     </div>
    );
};

export default Questions;