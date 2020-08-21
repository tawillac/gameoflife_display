import React from 'react';
import logo from './logo.svg';
import Cells from './Cells.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cells/>
      </header>
    </div>
  );
}

export default App;
