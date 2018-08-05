import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './../style/style.css';
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
const APIWEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${APIKEY}`;

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city:'Las Rozas',
            data:data1
        };
    }

    getWeatherState = () =>{
         return DAYSLEET;   
    } 
    getData = (weatherData) => {
        const {humidity,temp} = weatherData.main;
        console.log('Humidity: '+humidity);
        const {speed} = weatherData.wind;
        const weatherState = this.getWeatherState();
        const data = {
            temperature:temp,
            weatherState,
            humidity,
            wind:`${speed}`,
           
            
        }
        return data; 
    }; 

   
    handleUpdateClick = () =>{
        fetch(APIWEATHER).then(data => {
          console.log(data);
          return data.json();
        }).then(weatherData => {
            console.log('WeatherData: '+weatherData);
            const data = this.getData(weatherData);
            this.setState({data});
        });
      
        console.log("Acualiza");
    }

 render = () => {
     const {city,data} = this.state;
     return(
        <div className='weatherLocationCont'>
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>)
 }
}; // end class

export default WeatherLocation;