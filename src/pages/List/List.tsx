import React, { FC, useCallback } from 'react';

import { Grid } from '@mui/material';

import { AddItemForm } from 'components/AddItemForm/AddItemForm';
import { CityWeatherShortInfo } from 'components/CityWeatherShortInfo/CityWeatherShortInfo';
import { useAppDispatch, useAppSelector } from 'hooks/useAppHooks';
import styles from 'pages/List/List.module.css';
import { deleteCity, requestCurrentWeather } from 'store/reducers/WeatherReducer';
import { selectCities, selectForecast } from 'store/selectors/WeatherSelectors';
import { ForecastStateType } from 'types/StateTypes';

export const List: FC = () => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector<string[]>(selectCities);
  const forecast = useAppSelector<ForecastStateType>(selectForecast);

  const addNewCityHandler = useCallback(
    (city: string) => {
      const cityWithUpperCase = city
        .split(' ')
        .map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())
        .join(' ');

      dispatch(requestCurrentWeather({ city: cityWithUpperCase }));
    },
    [dispatch],
  );
  const deleteCityHandler = useCallback(
    (city: string): void => {
      dispatch(deleteCity(city));
    },
    [dispatch],
  );

  return (
    <>
      <div className={styles.addItemForm}>
        <AddItemForm callBack={addNewCityHandler} />
      </div>
      <div className={styles.cityContainer}>
        {cities.map(cityName => (
          <Grid key={cityName} item>
            <div className={styles.cityInfo}>
              <CityWeatherShortInfo
                city={cityName}
                forecastForCity={forecast[cityName]}
                callback={deleteCityHandler}
              />
            </div>
          </Grid>
        ))}
      </div>
    </>
  );
};
