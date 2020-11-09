import React from 'react';
import './App.css';
import Box from './Components/Boxes/box';

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