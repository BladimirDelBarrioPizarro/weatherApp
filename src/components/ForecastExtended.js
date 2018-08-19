import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style/style.css';
import ForecastItem from './ForecastItem/index';
import transformForecast from './../services/transformForecast';


//api.openweathermap.org/data/2.5/forecast?id={city ID}
const APIKEY = '56de15b6daff254297d54efac8a85d46'; 
const URL = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{
    
    constructor(){
        super();
        this.state = {forecastData : null }
    }
    
    
    componentWillReceiveProps(nextProps){
        if(nextProps.city != this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city);
        }
    }
    updateCity = city =>{
         const url_forecast = `${URL}?q=${this.props.city}&appid=${APIKEY}`; 
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                console.log(weatherData);
                const forecastData = transformForecast(weatherData);
                console.log(forecastData);
                this.setState({ forecastData })
            }
        )
     }
     
     
    componentDidMount(){
      this.updateCity(this.props.city); 
    }
    

    renderForeCastItemDays(forecastData){
       
       return forecastData.map ( forecast => (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>))
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
                  this.renderForeCastItemDays(forecastData) :
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