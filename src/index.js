import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component or dumb components 
//always return JSX

function Greeting() {
  return (<div>
    <h4> Hello world </h4>
  </div>
  );
}

// const Greeting = () => {
//   return React.createElement('u', {}, 'hello world');
// };

//const Greeting = () => {
//  return React.createElement(
//    'u', 
//    {}, 
//    React.createElement('h1', {}, 'hello')
//  );
// };

ReactDOM.render(<Greeting />,
  document.getElementById('root')
);