import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Record from "./components/Record";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click here and one day you can record!</p>
      </header>
      <main>
        <Record />
      </main>
      <footer className="Footer">
        <a
          className="App-link"
          href="https://github.com/Git-Hannah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Hannah
        </a>
      </footer>
    </div>
  );
}

export default App;
