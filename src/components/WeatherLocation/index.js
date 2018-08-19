import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import CircularProgress from 'material-ui/CircularProgress';
import { Preloader } from 'react-materialize';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './../style/style.css';
import transformWeather from './../../services/transformWeather';




//const APIWEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APIKEY}&units=metric`;
//const APIWEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APIKEY}`;
//const LOCATION = 'Las Rozas';
const APIKEY = '56de15b6daff254297d54efac8a85d46';

const URL = "http://api.openweathermap.org/data/2.5/weather";

//Los class component tienen acesso al ciclo de vida de React
class WeatherLocation extends Component {
    constructor({city}){
        super();
        this.state = {
            city,
            data:null
        };
        console.log('CONSTRUCTOR');
    }

  

 componentWillMount(){
     console.log('componentWillMount');
     //this.handleUpdateClick();

   /*   const {city} = this.state;
      const APIWEATHER = `${URL}?q=${city}&appid=${APIKEY}`;
        fetch(APIWEATHER).then(data => {
          console.log('handleUpdateClick data: '+data);
          return data.json();
        }).then(weatherData => {
            console.log('handleUpdateClick weatherData: '+weatherData);
            const data = transformWeather(weatherData);
            this.setState({data});
        }); */
 }
 componentDidMount(){
     console.log('componentDidMount');
      const {city} = this.state;
      const APIWEATHER = `${URL}?q=${city}&appid=${APIKEY}`;
        fetch(APIWEATHER).then(data => {
          console.log('handleUpdateClick data: '+data);
          return data.json();
        }).then(weatherData => {
            console.log('handleUpdateClick weatherData: '+weatherData);
            const data = transformWeather(weatherData);
            this.setState({data});
        });
 }
 componentWillUpdate(){
     console.log('componentWillUpdate');
 }
 componentDidUpdate(){
     console.log('componentDidUpdate');
 }
 //Operador ternario si data es distinto de null muestra el mensaje
 render = () => {
     const {onWeatherLocationClick} = this.props;
     const {city,data} = this.state;
     return(
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        { data ? <WeatherData data={data}></WeatherData> : <Preloader size='big'/> }
    </div>)
    console.log('RENDER');
 }
}; // end class

WeatherLocation.PropTypes = {
    city: PropTypes.string,
    onWeatherLocationClick:PropTypes.func,
}
export default WeatherLocation;