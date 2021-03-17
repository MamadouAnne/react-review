import React, { createFactory } from 'react'
import reactDom from 'react-dom'
import ReactDOM from 'react-dom'

// stateless functional component
//always returns jsx

// function Greeting(){
//   return <h1>Hello react developers</h1>

// }
const Greeting = () => {
 return React.createElement('h1', {}, 'hello world');
};

reactDom.render(<Greeting/>, document.getElementById('root'));