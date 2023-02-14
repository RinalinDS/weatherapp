import axios from 'axios';

import { CurrentForecastType } from 'types/CurrentForecastType';
import { MetaStateType } from 'types/StateTypes';
import { DailyForecastType } from '../types/DailyForecastType';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const params = {
  units: 'metric',
  appid: process.env.REACT_APP_APIKEY!,
};

export const weatherAPI = {
  getCurrentWeatherInCity(cityName: string) {
    return weatherInstance.get<CurrentForecastType>(`weather?q=${cityName}`, { params });
  },
  getFiveDayForecastInCity(cityName: string) {
    return weatherInstance.get<DailyForecastType>(`forecast?q=${cityName}`, {
      params: { ...params, cnt: 8 },
    });
  },
};

export const countryAPI = {
  getCountryInfoByCity(code: string) {
    return axios.get<MetaStateType>(
      `https://restcountries.com/v2/alpha/${code}?fields=flags,name`,
    );
  },
};
