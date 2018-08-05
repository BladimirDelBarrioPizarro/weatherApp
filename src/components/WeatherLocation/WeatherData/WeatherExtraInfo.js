import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const WeatherExtraInfo = ({humidity,wind}) =>(
    <div className='WeatherExtraInfoCont'>
        <span>{`${humidity} H - `}</span>
        <span>{`${wind}m/s`}</span>
    </div>
);

WeatherExtraInfo.PropTypes = {
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired
}
export default WeatherExtraInfo;