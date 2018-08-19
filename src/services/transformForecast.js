import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather'

const transformForecast = (data) => (
    //filter espera una función que retorna un booleano, y establece si el elemento va a ser parte de la raiz resultante si cumple la condición
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 23 
       /* moment.unix(item.dt).hour()  === 6 ||
        moment.unix(item.dt).hour()  === 12 ||
        moment.unix(item.dt).hour()  === 18*/ 
    )).map(item => (
        {
            weeDay:moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data:transformWeather(item)
        }
    ))
);

export default transformForecast; 