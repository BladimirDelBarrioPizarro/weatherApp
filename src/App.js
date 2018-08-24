import React, { Component } from 'react';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';

const cities =  [
  'Las Rozas,es',
  'Barcelona,es',
  'Milagros,es'
];

//Create Store
const store = createStore( () => {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()) ;
     
class App extends Component {

     constructor(){
         super();
         this.state = {city:null};
     }

  //Manejador de evento
  handleSelectedLocation = city => {
    this.setState({ city })
    console.log(`handleSelectionLocation ${city}`);
    store.dispatch(setCity(city));
  }
   
  render() {
    const {city} = this.state;
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
            <div className="detail">
              {!city  ? <h3 className="forecast-title">No se seleccionó ciudad</h3> :  <ForecastExtended city={city}></ForecastExtended> } 
              </div>
           </Paper>   
          </Col>
        </Row>
      </Grid>

    </MuiThemeProvider>
    );
  }
}

export default App;
