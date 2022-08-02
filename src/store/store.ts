import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers/AppReducer';
import { weatherReducer } from './reducers/WeatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  app: appReducer,
});

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
  reducer: rootReducer,
});

store.subscribe(() => {
  localStorage.setItem('cityList', JSON.stringify(store.getState().weather.cities));
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;
