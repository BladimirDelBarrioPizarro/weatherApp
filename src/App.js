import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
  
    <MuiThemeProvider>
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <p className="App-intro">
        </p>
       <WeatherLocation></WeatherLocation>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
