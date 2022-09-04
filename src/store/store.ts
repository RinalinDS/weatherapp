import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { getCitiesFromLocalStorage } from '../utils/getFromLocal';

import { appReducer } from './reducers/AppReducer';
import { weatherReducer } from './reducers/WeatherReducer';

export const store = configureStore({
  preloadedState: {
    weather: {
      cities: getCitiesFromLocalStorage(),
      forecast: {},
    },
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
  reducer: {
    weather: weatherReducer,
    app: appReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('cityList', JSON.stringify(store.getState().weather.cities));
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
