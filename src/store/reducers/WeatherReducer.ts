import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { setAppStatus } from "./AppReducer";

import { weatherAPI } from "api/API";
import { ForecastStateType, ThunkReturnType } from "types/StateTypes";
import { RejectValueType } from "types/UtilTypes";
import { handleAsyncServerNetworkError } from "utils/error-utils";

export const requestCurrentWeather = createAsyncThunk<
  ThunkReturnType,
  string,
  RejectValueType
>("weather/requestCurrentWeather", async (city, thunkAPI) => {
  const { dispatch } = thunkAPI;

  try {
    dispatch(setAppStatus({ status: "loading" }));
    const {data} = await weatherAPI.getCurrentWeatherInCity(city);

    dispatch(addNewCity(city));

    return { forecast: data, city };
  } catch (e) {
    return handleAsyncServerNetworkError((e as Error).message, thunkAPI);
  } finally {
    dispatch(setAppStatus({ status: "idle" }));
  }
});

const slice = createSlice({
  name: "weather",
  initialState: {
    cities: [] as string[],
    forecast: {} as ForecastStateType,
  },
  reducers: {
    deleteCity: (state, action: PayloadAction<string>) => {
      const index = state.cities.findIndex((s) => s === action.payload);

      state.cities.splice(index, 1);
      delete state.forecast[action.payload];
    },
    getCities: (state, action: PayloadAction<string[]>) => {
      state.cities = action.payload;
    },
    addNewCity: (state, action: PayloadAction<string>) => {
      if (state.cities.find((f) => f === action.payload)) {
        return;
      }
      state.cities.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestCurrentWeather.fulfilled, (state, action) => {
      state.forecast[action.payload.city] = action.payload.forecast;
    });
  },
});

export const weatherReducer = slice.reducer;
export const { getCities, deleteCity, addNewCity } = slice.actions;
