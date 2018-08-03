import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) =>(
    <div>
        <span>{`${humidity} h - `}</span>
        <span>{`${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;