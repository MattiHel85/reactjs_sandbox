import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css';

class App extends Component {
  state = {
    likes: 0,
  };
  addHandler = () => {
    this.setState({
      likes: this.state.likes +1
    });
  };
  removeHandler = () => {
    this.state.likes === 0
      ? this.setState({ likes: 0 })
      : this.setState({ likes: this.state.likes -1});
  };
  resetHandler = () => {
    this.setState({ likes: 0 });
  };
  render() {
    let circleClass = `${
      this.state.likes === 0 ? "" : this.state.likes % 2 === 0 ? "even":"odd"
    } likes`;

    return (
      <>
        <Header />
        <main>
          <h1 className={circleClass}>Total likes: {this.state.likes}</h1>
          <button onClick={this.addHandler}>Add one</button>
          <button onClick={this.removeHandler}>Delete one</button>
          <button onClick={this.resetHandler}>Reset</button>
        </main>
        <Footer />
      </>
    );
  }

}

export default App;
