import React, { Component } from 'react';
import './Window.css';

class Window extends Component {

  closeHandler = () =>{
    window.location.reload();
  }

  render() {
    return (
      <div className="Footer" id='overlay'>
      <div id='win'>
      <p id='gameover'>Ups, game over! Your final score is: {this.props.score}</p>
      <button id='close' onClick={this.closeHandler}>
      Close</button></div>
      </div>

            );
          }
        }

        export default Window;
