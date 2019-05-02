import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Window from './Window/Window';

function randomCurrent(min, max) {
  return Math.floor (Math.random() * (max-min + 1)) + min;
}

class App extends Component {
  state = {
  current: 0,
  score: 0,
  rounds: 0, //how many "empty colors" can be shown in circles (with no clicks in it)....
  showWindow: false
  };
  pace = 1500; //this is not a state, it is always the same....so its outside not inside! State is being overwritten.
  timer = undefined;

  next = () => {
    if(this.state.rounds >=5){
      this.gameOverHandler();
      return;
    }
    let nextActive = undefined;

    do {
      nextActive = randomCurrent(1,4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive
    });
    this.setState(prevState => {
      return {
          rounds: prevState.rounds + 1
      };
    });


    this.pace *=0.99;
    this.timer = setTimeout(this.next.bind(this), this.pace);
  }
  startGameHandler = () => {
      this.next();
  }

  clickHandler = (btnId) => {
    console.log('clicked: ',btnId);
    if (this.state.current !==btnId) {
      this.gameOverHandler();
      return;
    }
    this.setState({
      rounds: 0 //everytime you click it gets zerou, and doesnt end the game....
    });

    this.setState(prevState => {
      return {
          score: prevState.score + 1
      };
    });
  };


  gameOverHandler = () => {
    clearTimeout(this.timer);
    this.setState({
        showWindow: true
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Speedgame</h1>
      <div id="buttons">
      <button type="button" name="Start" id='Start' onClick={this.startGameHandler}>Start game</button>
      <button type="button" name="Stop" id='Stop' onClick={this.gameOverHandler}>Stop game</button>
      </div>
      <div>
      <Main active={this.state.current === 1} myclick = {() => this.clickHandler(1)} />
      <Main active={this.state.current === 2} myclick = {() => this.clickHandler(2)} />
      <Main active={this.state.current === 3} myclick = {() => this.clickHandler(3)} />
      <Main active={this.state.current === 4} myclick = {() => this.clickHandler(4)} />
      </div>
      <Header score={this.state.score}/>
      {this.state.showWindow && <Window score={this.state.score} />}
      </div>
    );
  }
}

export default App;
