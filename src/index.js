import React from 'react';
import ReactDOM from 'react-dom';

// Nested Components, React Tools
// function Greeting() {
//   return (
//     <div>
//       <h2> heyyyyyy </h2>
//       <p> this is a message</p>
//       <h3>hiiii</h3>
//       <p>hllllllllllllllllll</p>
//     </div>
//   );
// }

// same as above 

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
      <Per />
    </div>
  );
}

const Person = () => <h2>heyyyyyy</h2>;
const Message = () => {
  return <p> this is a message </p>;
};
const Per = () => <section><h3>hiiii</h3>
  <p>hllllllllllllllllll</p>
</section>;

ReactDOM.render(<Greeting />, document.getElementById('root'));