import {DAYCLOUDYHIGH,
        DAYLIGHTWIND,
        DAYSLEET,
        DATHAZE,
        NA,
        DAYSUNNY,
        THUNDER,
        DRIZZLE } from './../constants/weathers';
import convert from 'convert-units';


    const getWeatherState = (weather) =>{
        const {id} = weather[0];
        if(id < 300){
            return THUNDER;
        }
        else if(id < 400){
            return DRIZZLE;
        }
        else if(id<600){
            return DAYLIGHTWIND;
        }
        else if(id < 700){
            return DAYCLOUDYHIGH;
        }
        else if(id === 800){
            return NA;
        }
        else{
            return DATHAZE; 
        }
          
    }
   

    const getTemp = (kelvin) =>{
        console.log('Kelvin: '+kelvin)
        console.log('Convert: '+convert(kelvin).from('K').to('C').toFixed(2));
        return Number(convert(kelvin).from('K').to('C').toFixed(2))+11;    
    }
   
    const transformWeather = (weatherData) => {
        const {weather} = weatherData;
        const {humidity,temp} = weatherData.main;
        console.log('Humidity: '+humidity);
        const {speed} = weatherData.wind;
        const weatherState = getWeatherState(weather);
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