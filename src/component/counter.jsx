import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.formatCount = this.formatCount.bind(this);
  }

  handleAdd = () => {
    // this.state.num++;
    this.setState({ num: this.state.num + 1 });
  };

  handleMinus = () => {
    this.setState({ num: this.state.num - 1 });
  };

  formatCount() {
    return this.state.num === 0
      ? "Zero"
      : this.state.num && (this.state.num === 2 || this.state.num === -2)
      ? "love"
      : this.state.num;
  }

  render() {
    return (
      <div className="m-4">
        <p>{this.formatCount()}</p>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          +
        </button>
        <button className="btn btn-danger" onClick={this.handleMinus}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
