import React from 'react';
import PropTypes from 'prop-types';
const WeatherExtraInfo = ({humidity,wind}) =>(
    <div>
        <span>{`${humidity} H - `}</span>
        <span>{`${wind}m/s`}</span>
    </div>
);

WeatherExtraInfo.PropTypes = {
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired
}
export default WeatherExtraInfo;