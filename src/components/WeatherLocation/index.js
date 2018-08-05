import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './../style/style.css';

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={"Las Rozas"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;