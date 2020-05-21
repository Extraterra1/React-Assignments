import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWord: ["one", "two", "three", "four", "five", "six"],
    val: 6,
  };
  disable = () => {
    this.props.handleClick(this.props.idx);
  };
  render() {
    return (
      <i
        className={`Die ${this.props.locked ? "Die-locked" : ""} fas fa-dice-${
          this.props.numberWord[this.props.val - 1]
        } fa-5x ${this.props.rolling ? "Die-rolling" : ""}`}
        onClick={this.disable}
      ></i>
    );
  }
}

export default Die;
