import { AppRootStateType } from '../store';

import { MetaStateType, ForecastStateType } from 'types/StateTypes';
import { HourlyForecastList } from '../../types/DailyForecastType';
import { createSelector } from '@reduxjs/toolkit';

export const selectCities = (state: AppRootStateType): string[] => state.weather.cities;
export const selectForecast = (state: AppRootStateType): ForecastStateType =>
  state.weather.currentForecast;
export const selectLongForecast = (state: AppRootStateType): HourlyForecastList[] =>
  state.weather.dailyForecast;

export const selectCityMeta = createSelector(
  [selectForecast, (_, city) => ({ city })],
  (forecast, { city }) => {
    return forecast[city]?.meta || ({} as MetaStateType);
  },
);
