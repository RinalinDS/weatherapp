import React, { FC, useCallback } from 'react';

import { Grid } from '@mui/material';

import { AddItemForm } from 'components/AddItemForm/AddItemForm';
import { CityWeatherShortInfo } from 'components/CityWeatherShortInfo/CityWeatherShortInfo';
import styles from 'pages/List/List.module.css';
import { selectCities, selectForecast } from 'store/selectors/WeatherSelectors';
import { ForecastStateType } from 'types/StateTypes';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

export const List: FC = () => {
  const { requestCurrentWeather, deleteCity } = useActions();
  const cities = useAppSelector<string[]>(selectCities);
  const forecast = useAppSelector<ForecastStateType>(selectForecast);

  const addNewCityHandler = useCallback(
    (city: string) => {
      const cityWithUpperCase = city
        .split(' ')
        .map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())
        .join(' ');

      requestCurrentWeather({ city: cityWithUpperCase });
    },
    [requestCurrentWeather],
  );
  const deleteCityHandler = useCallback(
    (city: string): void => {
      deleteCity(city);
    },
    [deleteCity],
  );

  return (
    <>
      <div className={styles.addItemForm}>
        <AddItemForm callBack={addNewCityHandler} />
      </div>
      <div className={styles.cityContainer}>
        {cities.map(cityName => (
          <Grid key={cityName} item>
            <CityWeatherShortInfo
              city={cityName}
              forecastForCity={forecast[cityName]}
              callback={deleteCityHandler}
            />
          </Grid>
        ))}
      </div>
    </>
  );
};
