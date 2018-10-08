import axios from 'axios';
import keys from '../config';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${keys.api_key}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},bd`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}