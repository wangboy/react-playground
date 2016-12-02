import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './doc/Timer'
import Calculator from './doc/Calculator'
import LoginDialog from './doc/Dialog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React Playground</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Timer/>
        <LoginDialog/>
        <Calculator/>

      </div>
    );
  }
}

export default App;
