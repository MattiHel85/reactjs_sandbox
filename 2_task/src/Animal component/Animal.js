import React from 'react';
import './Animal.css';

function Animal(props){
    return (
      <div className="Animal">
        <p>Hello, I am {props.animal_name}. It is nice to meet you!</p>
      </div>   
    )
  }
  
  export default Animal;