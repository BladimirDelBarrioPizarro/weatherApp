import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city={'Buenos Aires,ar'}/>
        <WeatherLocation city={'Bogotá,col'}/>
        <WeatherLocation city={'Aranda de Duero,es'}/>
    </div>
);

export default LocationList;