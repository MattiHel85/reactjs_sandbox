import React, { Component } from 'react';
import Animal from "./Components/Animal/Animal";
import './App.css';

class App extends Component {
  state = {
    animals: [
      { name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/"},
      { name: "Rabbit", img: "https://source.unsplash.com/hS41iEO300E/"},
      { name: "Wolf", img: "https://source.unsplash.com/QqoXWeIzZfo"},
    ],
  };
  render() {
    return (
      <div className="cards">
        <Animal 
          name={this.state.animals[0].name}
          img={this.state.animals[0].img}
        />
        <Animal 
          name={this.state.animals[1].name}
          img={this.state.animals[1].img}
        />
        <Animal 
          name={this.state.animals[2].name}
          img={this.state.animals[2].img}
        />
      </div>
    )
  }
}


export default App;
