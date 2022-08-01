import React, { FC, useCallback } from "react";

import { Grid } from "@mui/material";

import styles from "./CitiesList.module.css";

import { AddItemForm } from "components/AddItemForm/AddItemForm";
import { useAppDispatch, useAppSelector } from "hooks/useAppHooks";
import { CityWeatherShortInfo } from "pages/CitiesList/CityWeatherShortInfo/CityWeatherShortInfo";
import {
  deleteCity,
  requestCurrentWeather,
} from "store/reducers/WeatherReducer";
import { selectCities, selectForecast } from "store/selectors/WeatherSelectors";
import { ForecastStateType } from "types/StateTypes";

export const CitiesList: FC = () => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector<string[]>(selectCities);
  const forecast = useAppSelector<ForecastStateType>(selectForecast);

  const addNewCityHandler = useCallback(
    (city: string) => {
      const cityWithUpperCase = city.split(' ').map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' ')
      dispatch(requestCurrentWeather(cityWithUpperCase));
    },
    [dispatch]
  );
  const deleteCityHandler = useCallback((city: string): void => {
    dispatch(deleteCity(city));
  },[dispatch])

  return (
    <>
      <Grid container style={{ padding: "20px" }}>
        <AddItemForm callBack={addNewCityHandler} />
      </Grid>
      <div className={styles.cityContainer}>
        {cities.map((cityName) => {
          return (
            <Grid key={cityName} item>
              <div className={styles.cityInfo}>
                <CityWeatherShortInfo
                  city={cityName}
                  forecastForCity={forecast[cityName]}
                  callback={deleteCityHandler}
                />
              </div>
            </Grid>
          );
        })}
      </div>
    </>
  );
};
