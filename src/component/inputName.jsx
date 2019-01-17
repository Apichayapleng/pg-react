import React, { Component } from "react";

class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      arr: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.state.arr.push(this.state.value);
    this.setState(this.state);
    event.preventDefault();
    alert("Add name success", this.state.value);
  }

  render() {
    const arrList = this.state.arr;
    return (
      <div className="inputName m-5">
        <h1>NAME LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
          {/* <p>{this.state.value}</p> */}
          <ul>
            {arrList.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default InputName;
