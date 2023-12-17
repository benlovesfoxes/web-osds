import React, { useState } from 'react';
import './App.css';

function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return (
    <div className="app">
      <div className="taskbar">
        <button className="start-button" onClick={toggleStartMenu}>
          Start
        </button>
      </div>
      {startMenuOpen && (
        <div className="start-menu">
          <ul>
            <li>Program 1</li>
            <li>Program 2</li>
            <li>Program 3</li>
          </ul>
        </div>
      )}
      <div className="desktop">
        {/* Add other components and windows here */}
      </div>
    </div>
  );
}

export default App;
