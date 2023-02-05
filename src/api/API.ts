import axios from 'axios';

import { CityWeatherType } from 'types/APIWeatherType';
import { CountryStateType } from 'types/StateTypes';
import DayWeatherType from '../types/DayWeatherType';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const params = {
  units: 'metric',
  appid: process.env.REACT_APP_APIKEY!,
};

export const weatherAPI = {
  getCurrentWeatherInCity(cityName: string) {
    return weatherInstance.get<CityWeatherType>(`weather?q=${cityName}`, { params });
  },
  getFiveDayForecastInCity(cityName: string) {
    return weatherInstance.get<DayWeatherType>(`forecast?q=${cityName}`, {
      params: { ...params, cnt: 8 },
    });
  },
};

export const countryAPI = {
  getCountryInfoByCity(code: string) {
    return axios.get<CountryStateType>(
      `https://restcountries.com/v2/alpha/${code}?fields=flags,name`,
    );
  },
};
