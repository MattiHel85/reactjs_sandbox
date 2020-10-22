import React from 'react';
import './App.css';

function Box(props){
  return (
    <div className="Box">
      <h1>{props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>   
  )
}

function App() {
  return (
    <div className="App">
      <Box name="Victoria" title="Restaurant Manager" age="42"/>
      <Box name="Andrew" title="Unemployed" age="41"/>
      <Box name="Daniel" title="Highwayman" age="37"/>
      <Box name="Matthew" title="Student" age="35"/>
      <Box name="Nathan" title="Criminal" age="34"/>
    </div>
  );
}

export default App;
