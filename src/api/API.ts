import axios from 'axios';

import { CityWeatherType } from 'types/APIWeatherType';
import { CountryStateType } from 'types/StateTypes';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

// export const weatherAPI = {
//   getCurrentWeatherInCity(cityName: string) {
//     return weatherInstance.get<CityWeatherType>(
//       `weather?q=${cityName}&appid=${process.env.REACT_APP_APIKEY}&units=metric`,
//     );
//   },
// };

export const weatherAPI = {
  getCurrentWeatherInCity(cityName: string) {
    return weatherInstance.get<CityWeatherType>(`weather`, {
      params: {
        q: cityName,
        appid: process.env.REACT_APP_APIKEY!,
        units: 'metric',
      },
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
