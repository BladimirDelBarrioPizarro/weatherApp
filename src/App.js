import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

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
          <Col xs={12}>
          <AppBar title="WeatherApp"></AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={5}>
             <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
           <Col xs={12} md={6} lg={5}>
           <Paper zDepth={4}>
            <div className="detail"><ForecastExtended></ForecastExtended></div>
           </Paper>   
          </Col>
        </Row>
      </Grid>

    </MuiThemeProvider>
    );
  }
}

export default App;
