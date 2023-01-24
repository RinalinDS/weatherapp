import { AppRootStateType } from '../store';

import { NullableType, RequestStatusType } from 'types/AppTypes';

export const selectStatus = (state: AppRootStateType): RequestStatusType =>
  state.app.status;
export const selectError = (state: AppRootStateType): NullableType<string> =>
  state.app.error;
export const selectCities = (state: AppRootStateType): string[] => state.weather.cities;
