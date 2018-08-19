import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style/style.css';
import ForecastItem from './ForecastItem/index';


/*const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
     temperature:10,
        weaterState:10,
        humidity:'normal',
        wind:'normal'
}*/
//api.openweathermap.org/data/2.5/forecast?id={city ID}
const APIKEY = '56de15b6daff254297d54efac8a85d46'; 
const URL = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{
    
    constructor(){
        super();
        this.state = {forecastData : null }
    }
    
    componentDidMount(){
        const url_forecast = `${URL}?q=${this.props.city}&appid=${APIKEY}`; 
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                console.log(weatherData);
            }
        )
    }

    renderForeCastItemDays(){
        return "Render Items";
      //  return days.map ( day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
    }


    renderProgress  = () => {
        return "Cargando pronóstico";
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div >
                <h3 className="forecast-title">Pronóstico extendido para {city}</h3>
                { forecastData ?
                  this.renderForeCastItemDays() :
                  this.renderProgress()
                }
           </div>
        )
    }
}

ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}

export default ForecastExtended; 