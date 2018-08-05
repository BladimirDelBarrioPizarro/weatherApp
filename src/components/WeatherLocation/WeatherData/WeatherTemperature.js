import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../../../constants/weathers';
import './../../style/style.css';

const stateToIconName = (weaterState) =>{
    console.log('stateToIconName: '+weaterState);
    
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
    <div className='weatherTemperatureCont'>
       {getWeatherIcon(weaterState)}  <br/><br/>
       <span>{`${temperature} Grados`}</span>     
    </div>
);

WeatherTemperature.PropTypes = {
    temperature: PropTypes.number,
    weaterState: PropTypes.string.isRequired,

};


export default WeatherTemperature;