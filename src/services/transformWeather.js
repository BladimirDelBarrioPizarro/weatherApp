import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY } from './../constants/weathers';
import convert from 'convert-units';


    const getWeatherState = () =>{
         return DAYSLEET;   
    }
   

    const getTemp = (kelvin) =>{
        console.log('Kelvin: '+kelvin)
        console.log('Convert: '+convert(kelvin).from('K').to('C').toFixed(2));
        return Number(convert(kelvin).from('K').to('C').toFixed(2))+10;    
    }
   
    const transformWeather = (weatherData) => {
        const {humidity,temp} = weatherData.main;
        console.log('Humidity: '+humidity);
        const {speed} = weatherData.wind;
        const weatherState = getWeatherState();
        const temperature = getTemp(temp);
        console.log('Temperature: '+temperature);
        const data = {
            temperature,
            weatherState,
            humidity,
            wind:`${speed}`,
          
            
        }
        ;
        return data; 
    }; 
    
    
    
    export default transformWeather; 