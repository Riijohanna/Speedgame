import React, { Component } from 'react';
import './Header.css';

class Header extends Component {


  render() {
    return (
      <div className="Header">
  <h2>Your score: | {this.props.score} |</h2>
      </div>

    );
  }
}

export default Header;
