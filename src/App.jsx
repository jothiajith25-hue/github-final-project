import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery – your one-stop shop for beautiful houseplants.</p>
      
      <button onClick={() => alert("Welcome to Product Page!")}>
        Get Started
      </button>
    </div>
  );
}

export default App;
