import { AppRootStateType } from "../store";

import { ForecastStateType } from "types/StateTypes";

export const selectCities = (state: AppRootStateType): string[] =>
  state.weather.cities;
export const selectForecast = (state: AppRootStateType): ForecastStateType =>
  state.weather.forecast;
