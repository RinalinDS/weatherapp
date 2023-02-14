import { CurrentForecastType } from './CurrentForecastType';

export type ForecastStateType = {
  [key: string]: ForecastMetaType;
};

export type ForecastMetaType = {
  forecast: CurrentForecastType;
  meta: MetaStateType;
};

export type ForecastThunkReturnType = {
  currentForecast: CurrentForecastType;
  city: string;
  meta?: MetaStateType;
  initRequest?: boolean;
};

export type MetaStateType = {
  flags: {
    png: string;
    svg: string;
  };
  name: string;
};
