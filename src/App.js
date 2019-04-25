import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Window from './Window/Window';
class App extends Component {
  clickHandler = () => {
    console.log('clicked!');
  }

  render() {
    return (
      <div className="App">
      <h1>Speedgame</h1>
      <div id="buttons">
      <button type="button" name="Start" id='Start' onClick={this.clickHandler}>Start game</button>
      <button type="button" name="Stop" id='Stop' onClick="gameOver()">Stop game</button>
      </div>
      <Header />
      <div>
      <Main myclick = {this.clickHandler}/>
      <Main myclick = {this.clickHandler}/>
      <Main myclick = {this.clickHandler}/>
      <Main myclick = {this.clickHandler}/>
      </div>
      <Window />
      </div>
    );
  }
}

export default App;
