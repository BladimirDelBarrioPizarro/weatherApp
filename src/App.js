import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
  
    <MuiThemeProvider>
      <div className="App">
        <p className="App-intro">
        </p>
       <LocationList/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
