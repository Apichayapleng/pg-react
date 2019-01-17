import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { link: ["http://www.google.com"] };
  }

  render() {
    // const link = this.state.link;
    return <div className="m-4">{/* <a href="${link}">gg</a> */}</div>;
  }
}

export default Home;
