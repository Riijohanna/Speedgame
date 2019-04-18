import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Window from './Window/Window'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Main/>
      <Window/>
      </div>
    );
  }
}

export default App;
