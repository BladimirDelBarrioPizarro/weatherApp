import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
     
    <MuiThemeProvider>
     {/* <div className="App">
        <p className="App-intro">
        </p>
       <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
    </div>*/}

     <Grid fluid>
        <Row>
          <Col lg={11}>
             <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
        </Row>
      </Grid>

    </MuiThemeProvider>
    );
  }
}

export default App;
