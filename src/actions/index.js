import axios from 'axios';

const API_KEY = 'ca5c176e6d246894bfa8847355e0ca50';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url)    

    //console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}