import React from 'react';
import logo from './logo.svg';
import './App.css';
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
  return (
    <div className="App">
        <h3>
          <OnOff />
        </h3>
    </div>
  );
}

export default App;
