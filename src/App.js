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
    
     <Grid fluid>
        <Row>
          <Col xs={12} md={6} lg={5}>
             <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
           <Col xs={12} md={6} lg={5}>
            <div className="detail">detail</div>   
          </Col>
        </Row>
      </Grid>

    </MuiThemeProvider>
    );
  }
}

export default App;
