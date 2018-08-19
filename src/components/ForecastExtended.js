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
class ForecastExtended extends Component{
    
    constructor(){
        super();
        this.state = {forecastData : null }
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