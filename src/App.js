import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Window from './Window/Window';
class App extends Component {
  state = {
  current: 0,
  score: 0,
  
  };
  pace = 1500; //this is not a state, it is always the same....so its outside not inside! State is being overwritten.

  clickHandler = (btnId) => {
    console.log('clicked: ',btnId);
  }

  render() {
    return (
      <div className="App">
      <h1>Speedgame</h1>
      <div id="buttons">
      <button type="button" name="Start" id='Start' onClick={this.clickHandler}>Start game</button>
      <button type="button" name="Stop" id='Stop'>Stop game</button>
      </div>
      <div>
      <Main myclick = {() => this.clickHandler(1)} />
      <Main myclick = {() => this.clickHandler(2)} />
      <Main myclick = {() => this.clickHandler(3)} />
      <Main myclick = {() => this.clickHandler(4)} />
      </div>
      <Header />
      <Window />
      </div>
    );
  }
}

export default App;
