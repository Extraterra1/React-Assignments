import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman maxGuesses={5} />
      </div>
    );
  }
}

export default App;
