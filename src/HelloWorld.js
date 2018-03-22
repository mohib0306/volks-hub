import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  render() {
    const helloWorld = 'Not another Hello World :(';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default HelloWorld;
