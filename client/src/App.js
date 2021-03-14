import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Record from "./components/Record";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Fantastic Audio App</h2>
        <p>One beautiful day you will find yourself <br /> recording your creative inspirations,<br /> and they will be grammatically corrected<br /> and read back to you!</p>
      </header>
      <main>
        <Record />
      </main>
      <footer className="footer">
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
