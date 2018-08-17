import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city={'Las Rozas,es'}/>
        <WeatherLocation city={'Barcelona,es'}/>
        <WeatherLocation city={'Aranda de Duero,es'}/>
    </div>
);

export default LocationList;