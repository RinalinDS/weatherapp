import axios from 'axios';

import { CityWeatherType } from 'types/APIWeatherType';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const weatherAPI = {
  getCurrentWeatherInCity(cityName: string) {
    return weatherInstance.get<CityWeatherType>(
      `weather?q=${cityName}&appid=${process.env.REACT_APP_APIKEY}&units=metric`,
    );
  },
};
