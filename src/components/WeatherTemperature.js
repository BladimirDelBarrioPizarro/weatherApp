import React from 'react';
import WeatherIcons from 'react-weathericons';
import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../constants/weathers';

const stateToIconName = (weaterState) =>{
    console.log(weaterState);
    
    switch(weaterState){
        case DAYCLOUDYHIGH:
        return  "day-cloudy-high";
        case DAYLIGHTWIND:
        return  "day-light-wind";
        case DAYSLEET:
        return  "day-sleet";
        case DATHAZE:
        return  "day-haze";
        case NA:
        return  "na";
        case DAYSUNNY:
        return "day-sunny";
        default:
        return  "day-sunny";
    }
};


const getWeatherIcon = (weaterState) => {
    return  (<WeatherIcons name={stateToIconName(weaterState)} size="5x"/>)
};

const WeatherTemperature = ({temperature,weaterState}) => (
    <div>
        {getWeatherIcon(weaterState)} <br/><br/>
       <span>{`${temperature} C`}</span>     
       
    </div>
);

export default WeatherTemperature;