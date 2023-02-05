import { CityWeatherType } from './APIWeatherType';

export type ForecastStateType = {
  [key: string]: ForecastType;
};

export type ForecastType = {
  forecast: CityWeatherType;
  meta: CountryStateType;
};

export type ForecastThunkReturnType = {
  forecast: CityWeatherType;
  city: string;
  meta?: CountryStateType;
  initRequest?: boolean;
};

export type CountryStateType = {
  flags: {
    png: string;
    svg: string;
  };
  name: string;
};
