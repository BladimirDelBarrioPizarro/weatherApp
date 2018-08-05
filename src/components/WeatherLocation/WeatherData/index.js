import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../../../constants/weathers';

import './../../style/style.css';        

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={35} weaterState={DAYSUNNY}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={10}></WeatherExtraInfo>
    </div>
);

export default WeatherData;