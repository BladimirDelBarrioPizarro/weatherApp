import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './../style/style.css';
import transformWeather from './../../services/transformWeather';

import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../../constants/weathers';

const data1 = {
    temperature:35,
    weaterState:DAYSUNNY,
    wind:80,
    humidity:10
}

const LOCATION = 'Las Rozas';
const APIKEY = '56de15b6daff254297d54efac8a85d46';
//const APIWEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APIKEY}&units=metric`;
const APIWEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APIKEY}`;

//Los class component tienen acesso al ciclo de vida de React
class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city:'Las Rozas',
            data:data1
        };
        console.log('CONSTRUCTOR');
    }

  
   
    handleUpdateClick = () =>{
        fetch(APIWEATHER).then(data => {
          console.log(data);
          return data.json();
        }).then(weatherData => {
            console.log('WeatherData: '+weatherData);
            const data = transformWeather(weatherData);
            this.setState({data});
        });
      
        console.log("handleUpdateClick");
    }
 componentWillMount(){
     console.log('componentWillMount');
 }
 componentDidMount(){
     console.log('componentDidMount');
 }
 componentWillUpdate(){
     console.log('componentWillUpdate');
 }
 componentDidUpdate(){
     console.log('componentDidUpdate');
 }
 render = () => {
     const {city,data} = this.state;
     return(
        <div className='weatherLocationCont'>
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>)
    console.log('RENDER');
 }
}; // end class

export default WeatherLocation;