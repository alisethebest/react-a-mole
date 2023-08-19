import React from "react";
import MoleContainer from "./MoleContainer";
import "./App.css";

function App() {
  function createMoleHill() {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} />);
    }
    return <div className="mole-hills">{hills}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React-A-Mole</h1>
        {createMoleHill()}
      </header>
    </div>
  );
}

export default App;
