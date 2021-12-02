import React from 'react';
import ReactDOM from 'react-dom';

//JSX RULES
// return single element 
// div / section / article or Fragement 
// use camelCase for html attributes
// className instead of class
// close every element 
// formatting
// self note: either a <div>....</div> containing everything else or <React.Fragment>....</React.Fragment> or <>...</>

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h1>hey</h1>
        <ul>
          <li>
            <a href="#">a</a>
          </li>
          <img src='' alt='' />
          <inpur type='text' name='' id='' />
        </ul>
      </div>
    </React.Fragment >
  );
}

ReactDOM.render(<Greeting />,
  document.getElementById('root')
);