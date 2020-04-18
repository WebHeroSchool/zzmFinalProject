import React from 'react';
import logo from './logo.svg';
import './App.css';

let gifts = "даров";
let partOne = 5-4;
let flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{44}
        </p>
        <p style={{
          color: "darkviolet",
          fontSize: 30,
          fontWeight: "bold"
        }}>
          {partOne}. Осыпав чадо ворохом {gifts}, ценить дары ты враз его отучишь.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {flag && "flag is true!"}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p>
          {flag ? "flag is true!": "flag is false!"}
        </p>
      </header>
    </div>
  );
}

export default App;
