import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="Main" onClick={this.props.myclick}>
  </div>
      );
    }
  }

  export default Main;
