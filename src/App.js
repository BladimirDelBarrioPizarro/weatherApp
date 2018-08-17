import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import LocationList from './components/LocationList';


const cities =  [
  'Madrid,es',
  'Barcelona,es',
  'Aranda de Duero,es'
];

class App extends Component {
  render() {
    return (
  
    <MuiThemeProvider>
      <div className="App">
        <p className="App-intro">
        </p>
       <LocationList cities={cities}/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
