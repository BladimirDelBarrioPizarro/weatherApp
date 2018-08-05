import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './../../style/style.css';
import PropTypes from 'prop-types';        

const WeatherData = ({ data }) => {
    const {temperature,weaterState,humidity,wind} = data;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weaterState={weaterState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
    );
};

WeatherData .PropTypes = {
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weaterState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired
    })
}

export default WeatherData;