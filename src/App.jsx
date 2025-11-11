import React from "react";
import OpampSimulator from "./components/OpampSimulator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Virtual OP-AMP Lab - IC 741</h1>
      <OpampSimulator />
    </div>
  );
}

export default App;
