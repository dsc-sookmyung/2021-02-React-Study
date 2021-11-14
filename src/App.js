import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const header = axios.create({
  baseURL: "http://52.79.159.99:8080/api/header",
});

const slides = axios.create({
  baseURL: "http://52.79.159.99:8080/api/slide",
});

class App extends Component {
  state = {
    memo: [],
    memo1: [],
  };

  constructor() {
    super();
    header.get("/").then((res) => {
      console.log(res.data);
      this.setState({ memo: res.data });
    });

    slides.get("/").then((res) => {
      this.setState({ memo1: res.data });
    });
  }

  render() {
    return (
      <React.Fragment className="App">
        <header className="App-header">
          <p>Header: </p>
          {this.state.memo.map((memo) => (
            <h2 key={memo.id}>{memo.header}</h2>
          ))}
        </header>
        <div className="Slides">
          <p>slides: </p>
          {this.state.memo1.map((memo1) => (
            <h2 key={memo1.id}>{memo1.slide}</h2>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
