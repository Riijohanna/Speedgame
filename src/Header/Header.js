import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
  <h1>Speedgame</h1>
  <div id="buttons">
  <button type="button" name="Start" id='Start' onclick="pickNext()">Start game</button>
  <button type="button" name="Stop" id='Stop' onclick="gameOver()">Stop game</button>
  </div>
  <h2>Your score: <span id='score'>0</span></h2>
      </div>

    );
  }
}

export default Header;
