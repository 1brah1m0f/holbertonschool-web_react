import React from "react";
import holbertonLogo from "./assets/holberton-logo.jpg"; // Ensure the path is correct
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2026 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
