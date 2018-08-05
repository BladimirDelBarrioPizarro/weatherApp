import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={35} weaterState={NA}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={10}></WeatherExtraInfo>
    </div>
);

export default WeatherData;