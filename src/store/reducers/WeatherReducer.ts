import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appActions } from './AppReducer';

import { countryAPI, weatherAPI } from 'api/API';
import {
  ForecastMetaType,
  ForecastStateType,
  ForecastThunkReturnType,
} from 'types/StateTypes';
import { RejectValueType } from 'types/UtilTypes';
import { handleAsyncServerNetworkError } from 'utils/error-utils';
import { AxiosError } from 'axios';
import { HourlyForecastList } from '../../types/DailyForecastType';

export const requestCurrentForecast = createAsyncThunk<
  ForecastThunkReturnType,
  { city: string; initRequest?: boolean },
  RejectValueType
>('weather/requestCurrentWeather', async ({ city, initRequest = true }, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    const { data } = await weatherAPI.getCurrentWeatherInCity(city);
    if (initRequest) {
      const { data: meta } = await countryAPI.getCountryInfoByCity(data?.sys?.country);
      dispatch(weatherActions.addNewCity(city));
      return { currentForecast: data, city, meta, initRequest };
    }
    return { currentForecast: data, city };
  } catch (e) {
    return handleAsyncServerNetworkError(
      (e as AxiosError<{ cod: string; message: string }>)?.response?.data?.message,
      thunkAPI,
    );
  } finally {
    dispatch(appActions.setAppStatus({ status: 'idle' }));
  }
});

export const requestDailyForecast = createAsyncThunk<
  HourlyForecastList[],
  { cityName: string },
  RejectValueType
>('weather/requestLongForecast', async ({ cityName }, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    dispatch(appActions.setAppStatus({ status: 'loading' }));
    const response = await weatherAPI.getFiveDayForecastInCity(cityName);
    return response.data.list;
  } catch (e) {
    return handleAsyncServerNetworkError(
      (e as AxiosError<{ cod: string; message: string }>)?.response?.data?.message,
      thunkAPI,
    );
  } finally {
    dispatch(appActions.setAppStatus({ status: 'idle' }));
  }
});

const slice = createSlice({
  name: 'weather',
  initialState: {
    cities: [] as string[],
    currentForecast: {} as ForecastStateType,
    dailyForecast: [] as HourlyForecastList[],
  },
  reducers: {
    deleteCity: (state, action: PayloadAction<string>) => {
      const index = state.cities.findIndex(s => s === action.payload);

      state.cities.splice(index, 1);
      delete state.currentForecast[action.payload];
    },
    addNewCity: (state, action: PayloadAction<string>) => {
      if (state.cities.find(f => f === action.payload)) {
        return;
      }
      state.cities.unshift(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(requestCurrentForecast.fulfilled, (state, action) => {
        if (action.payload.initRequest && action.payload.meta) {
          state.currentForecast[action.payload.city] = {} as ForecastMetaType;
          state.currentForecast[action.payload.city].forecast =
            action.payload.currentForecast;
          state.currentForecast[action.payload.city].meta = action.payload.meta;
        } else {
          state.currentForecast[action.payload.city].forecast =
            action.payload.currentForecast;
        }
      })
      .addCase(requestDailyForecast.fulfilled, (state, action) => {
        state.dailyForecast = action.payload;
      });
  },
});
export const weatherActions = {
  requestDailyForecast,
  requestCurrentForecast,
  ...slice.actions,
};
export const weatherReducer = slice.reducer;
