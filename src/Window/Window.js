import React, { Component } from 'react';
import './Window.css';

class Window extends Component {
  render() {
    return (
      <div className="Footer" id='win'>
      <p id='gameover'>Ups, game over! Your final score is: </p>
      <button id='close' onclick="window.location.reload()">
      Close</button></div>

            );
          }
        }

        export default Window;
