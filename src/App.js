import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import LocationList from './components/LocationList';


const cities =  [
  'Las Rozas,es',
  'Barcelona,es',
  'Aranda de Duero,es'
];

class App extends Component {
  //Manejador de evento
  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }
   
  render() {
    return (
     
    <MuiThemeProvider>r>
      <div className="App">
        <p className="App-intro">
        </p>
       <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
