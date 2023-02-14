import React, { FC, useCallback } from 'react';

import { Grid } from '@mui/material';

import { AddItemForm } from 'components/AddItemForm/AddItemForm';
import { CityWeatherShortInfo } from 'components/CityWeatherShortInfo/CityWeatherShortInfo';
import styles from 'pages/List/List.module.css';
import { selectCities, selectForecast } from 'store/selectors/WeatherSelectors';
import { ForecastStateType } from 'types/StateTypes';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { getUpperCase } from '../../utils/getUpperCase';

export const List: FC = () => {
  // TODO Rename component
  const { requestCurrentForecast, deleteCity } = useActions();
  const cities = useAppSelector<string[]>(selectCities);
  const forecast = useAppSelector<ForecastStateType>(selectForecast);

  const addNewCityHandler = useCallback(
    (city: string) => {
      requestCurrentForecast({ city: getUpperCase(city) });
    },
    [requestCurrentForecast],
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
