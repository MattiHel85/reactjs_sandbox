// import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Circle from "./Circle"
import GameOver from "./GameOver"

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    rounds: 0,
    circles: [
      {
        id: 1, color: "green",
      },
      {
        id: 2, color: "red",
      },
      {
        id: 3, color: "yellow",
      },
      {
        id: 4, color: "blue",
      }
    ]
  };
  pace = 1500;
  timer = undefined;


  clickHandler = (id) => {

    if (this.state.current !== id){
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score +1,
      rounds: 0,
    });
  };

  nextCircle = () => {

    if(this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current)

    this.setState({
      current: nextActive,
    });

    this.pace *= 0.95
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("Active circle is: ", this.state.current);

  };

  startHandler = () => {
    this.nextCircle();
  }

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({showGameOver: true})
  }

  render() {
    const circles = this.state.circles.map((item) => {
      return <Circle 
      key={item.id} 
      color={item.color} 
      click={() => this.clickHandler(item.id)}
      active={this.state.current === item.id}
      />;
    })
    return (
    <div className="App">
      <header className="App-header">
        <h1>Speedgame</h1>
        <p>Score: {this.state.score}</p>
        <div className="Circles">
          {circles}
        </div>
        <div className="Game-buttons">
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.stopHandler}>Stop Game</button> 
          {this.state.showGameOver && <GameOver score={this.state.score}/>}        
        </div>
      </header>
    </div>
  );

  }
}

export default App;
