import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./component/counter";
// import Home from "./component/Home";
import InputName from "./component/inputName";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Counter />, document.getElementById("root"));
// ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.render(<InputName />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
