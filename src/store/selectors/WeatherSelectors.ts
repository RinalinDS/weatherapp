import { AppRootStateType } from '../store';

import { CountryStateType, ForecastStateType } from 'types/StateTypes';
import { HourlyForecastList } from '../../types/DayWeatherType';
import { createSelector } from '@reduxjs/toolkit';

export const selectCities = (state: AppRootStateType): string[] => state.weather.cities;
export const selectForecast = (state: AppRootStateType): ForecastStateType =>
  state.weather.forecast;
export const selectLongForecast = (state: AppRootStateType): HourlyForecastList[] =>
  state.weather.longForecast;

export const selectCityMeta = createSelector(
  [selectForecast, (_, city) => ({ city })],
  (forecast, { city }) => {
    return forecast[city]?.meta || ({} as CountryStateType);
  },
);
