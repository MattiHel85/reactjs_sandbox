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

export default Box;