import { CityWeatherType } from './APIWeatherType';

export type ForecastStateType = {
  [key: string]: CityWeatherType;
};

export type ThunkReturnType = {
  forecast: CityWeatherType;
  city: string;
};

export type CountryStateType = {
  flags: {
    png: string;
    svg: string;
  };
  name: string;
};
