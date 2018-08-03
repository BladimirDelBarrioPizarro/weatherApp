import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherIcon = (weaterState) =>{
    switch(weaterState){
        case "sleet":
        return  (<WeatherIcons name="sleet" size="5x"/>)
        default:
        return  (<WeatherIcons name="tsunami" size="5x"/>)
    }
};
const WeatherTemperature = ({temperature,weaterState}) => (
    <div>
        {getWeatherIcon(weaterState)}
       <span>{`${temperature} C`}</span>     
       
    </div>
);

export default WeatherTemperature;