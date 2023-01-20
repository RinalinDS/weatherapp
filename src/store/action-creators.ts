import { appActions } from './reducers/AppReducer';
import { weatherActions } from './reducers/WeatherReducer';

export const AllActions = {
  ...appActions,
  ...weatherActions,
};
