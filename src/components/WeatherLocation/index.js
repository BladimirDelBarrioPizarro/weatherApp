import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './../style/style.css';
import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../../constants/weathers';

const data = {
    temperature:35,
    weaterState:DAYSUNNY,
    wind:80,
    humidity:10
}

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={"Las Rozas"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);


export default WeatherLocation;