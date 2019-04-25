import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
  <h2>Your score: <span id='score'>0</span></h2>
      </div>

    );
  }
}

export default Header;
