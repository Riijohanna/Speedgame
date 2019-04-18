import React, { Component } from 'react';
import './Window.css';

class Window extends Component {
  render() {
    return (
      <div id='win'>
      <p id='gameover'></p><div id='close' onclick="window.location.reload()">
      Close</div></div>

            );
          }
        }

        export default Window;
