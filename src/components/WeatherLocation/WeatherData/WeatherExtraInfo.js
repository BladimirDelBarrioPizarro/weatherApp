import React from 'react';
import PropTypes from 'prop-types';
import './../../style/style.css';


const WeatherExtraInfo = ({humidity,wind}) =>(
    <div className='weatherExtraInfoCont'>
        <span>{`Humedad: ${humidity} %  `}</span>
        <span>{`Vientos: ${wind}m/s`}</span>
    </div>
);

WeatherExtraInfo.PropTypes = {
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired
}
export default WeatherExtraInfo;