import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppStatus } from './AppReducer';

import { countryAPI, weatherAPI } from 'api/API';
import { ForecastStateType, ForecastType, ThunkReturnType } from 'types/StateTypes';
import { RejectValueType } from 'types/UtilTypes';
import { handleAsyncServerNetworkError } from 'utils/error-utils';
import { AxiosError } from 'axios';

export const requestCurrentWeather = createAsyncThunk<
  ThunkReturnType,
  { city: string; initRequest?: boolean },
  RejectValueType
>('weather/requestCurrentWeather', async ({ city, initRequest = true }, thunkAPI) => {
  const { dispatch } = thunkAPI;

  try {
    dispatch(setAppStatus({ status: 'loading' }));
    const { data } = await weatherAPI.getCurrentWeatherInCity(city);

    if (initRequest) {
      const { data: meta } = await countryAPI.getCountryInfoByCity(data?.sys?.country);

      dispatch(addNewCity(city));

      return { forecast: data, city, meta, initRequest };
    }

    return { forecast: data, city };
  } catch (e) {
    return handleAsyncServerNetworkError(
      (e as AxiosError<{ cod: string; message: string }>)?.response?.data?.message,
      thunkAPI,
    );
  } finally {
    dispatch(setAppStatus({ status: 'idle' }));
  }
});

const slice = createSlice({
  name: 'weather',
  initialState: {
    cities: [] as string[],
    forecast: {} as ForecastStateType,
  },
  reducers: {
    deleteCity: (state, action: PayloadAction<string>) => {
      const index = state.cities.findIndex(s => s === action.payload);

      state.cities.splice(index, 1);
      delete state.forecast[action.payload];
    },
    addNewCity: (state, action: PayloadAction<string>) => {
      if (state.cities.find(f => f === action.payload)) {
        return;
      }
      state.cities.unshift(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(requestCurrentWeather.fulfilled, (state, action) => {
      if (action.payload.initRequest && action.payload.meta) {
        state.forecast[action.payload.city] = {} as ForecastType;
        state.forecast[action.payload.city].forecast = action.payload.forecast;
        state.forecast[action.payload.city].meta = action.payload.meta;
      } else {
        state.forecast[action.payload.city].forecast = action.payload.forecast;
      }
    });
  },
});
export const weatherActions = {
  requestCurrentWeather,
  ...slice.actions,
};
export const weatherReducer = slice.reducer;
export const { deleteCity, addNewCity } = slice.actions;
