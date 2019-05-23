import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WHATS UP REAL WORLD REACT
        </p>
        <a
          className="App-link"
          href="https://bit.ly/sls-slides-sf-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Serverless
        </a>
      </header>
    </div>
  );
}

export default App;
