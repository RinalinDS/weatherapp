import React, { FC, useCallback } from 'react';

import { Grid } from '@mui/material';

import { AddItemForm } from 'components/AddItemForm/AddItemForm';
import { CityCurrentWeatherCard } from 'components/CityWeatherShortInfo/CurrentCityWeatherCard';
import styles from 'pages/List/MainPage.module.css';
import { selectCities, selectForecast } from 'store/selectors/WeatherSelectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { getUpperCase } from '../../utils/getUpperCase';

export const MainPage: FC = () => {
  const { requestCurrentForecast, deleteCity } = useActions();
  const cities = useAppSelector(selectCities);
  const forecast = useAppSelector(selectForecast);

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
      {cities.length > 0 ? (
        <div className={styles.cityContainer}>
          {cities.map(cityName => (
            <Grid key={cityName} item>
              <CityCurrentWeatherCard
                city={cityName}
                forecastForCity={forecast[cityName]}
                callback={deleteCityHandler}
              />
            </Grid>
          ))}
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          There are no cities in list try to add some!
        </div>
      )}
    </>
  );
};
