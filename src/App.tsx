import React from "react";
import "./App.css";
import { Keyboard } from "./components";
import { baseNotes } from "./data";

function App() {
  const buildKeys = (max: number) => {
    let keys = [];
    for (let i = 0; i < Math.floor(max / baseNotes.length); i++) {
      keys.push(baseNotes);
    }
    return keys;
  };
  const maxKeys = 49;
  const keys = buildKeys(maxKeys);

  return (
    <div className="App">
      <Keyboard keys={keys} />
    </div>
  );
}

export default App;
