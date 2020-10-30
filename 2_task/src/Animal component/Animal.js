import React from 'react';
import './Animal.css';

function Animal(props){
    return (
      <div className="Animal">
        <h1>{props.animal}</h1>
        <p>Hello, I am <span>{props.animal_name}</span>. It is nice to meet you!</p>
      </div>   
    )
  }
  
  export default Animal;