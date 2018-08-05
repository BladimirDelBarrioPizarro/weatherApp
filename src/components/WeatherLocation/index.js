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

const data2 = {
    temperature:5,
    weaterState:DATHAZE,
    wind:180,
    humidity:3
}



class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city:'Las Rozas',
            data:data1
        };
    }

    handleUpdateClick = () =>{
         this.setState ({
            data:data2
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
}; // en class

export default WeatherLocation;