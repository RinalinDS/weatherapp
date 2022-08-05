import React, { FC, memo, SyntheticEvent } from 'react';

import { Delete } from '@mui/icons-material';
import { Button, IconButton, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

import styles from './CityWeatherShortInfo.module.css';

import { useAppDispatch } from 'hooks/useAppHooks';
import { requestCurrentWeather } from 'store/reducers/WeatherReducer';
import { ForecastType } from 'types/StateTypes';

type CityWeatherShortInfoPropsType = {
  city: string;
  forecastForCity: ForecastType;
  callback: (city: string) => void;
};

export const CityWeatherShortInfo: FC<CityWeatherShortInfoPropsType> = memo(
  ({ city, callback, forecastForCity }) => {
    const dispatch = useAppDispatch();
    const callbackHandler = (e: SyntheticEvent) => {
      e.preventDefault();
      callback(city);
    };
    const updateCityWeather = () => {
      dispatch(requestCurrentWeather({ city, initRequest: false }));
    };

    return (
      <>
        <NavLink to={`/${city}`}>
          <Paper
            variant="outlined"
            style={{
              backgroundColor: 'aliceblue',
              borderRadius: '10px',
              boxSizing: 'border-box',
              padding: '1rem',
            }}
          >
            <div className={styles.header}>
              <h1>{city}</h1>
              <IconButton
                size="medium"
                onClick={e => {
                  callbackHandler(e);
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </div>
            <ul className={styles.list}>
              <li>
                <b>Temperature:</b> {forecastForCity?.forecast?.main?.temp}°C
              </li>
              <li>
                <b>Feels like:</b> {forecastForCity?.forecast.main?.feels_like}°C
              </li>
              <li>
                <b>Wind speed:</b> {forecastForCity?.forecast.wind?.speed} m/s
              </li>
              <li>
                <b>Pressure:</b> {forecastForCity?.forecast.main?.pressure} mm
              </li>
            </ul>
          </Paper>
        </NavLink>
        <div className={styles.buttonContainer}>
          <Button variant="contained" size="large" onClick={updateCityWeather}>
            Update
          </Button>
        </div>
      </>
    );
  },
);
