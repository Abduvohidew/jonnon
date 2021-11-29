import React from 'react';
import ReactDOM from 'react-dom';
const App = () =>{
  const headingStyle = {
    color: 'red',
    fontSize: 40,
    
  }
  return <>
  <h1 style={headingStyle}>gitxap test app</h1>
  </>
}
ReactDOM.render(<App/>, document.querySelector('#root'))