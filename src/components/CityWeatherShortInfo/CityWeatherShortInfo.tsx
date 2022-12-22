import React, { FC, memo, SyntheticEvent, useState } from 'react';

import { Delete } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { Modal } from '../Modal/Modal';

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
    const [isModalActive, setModalActive] = useState<boolean>(false);
    const callbackHandler = (e: SyntheticEvent) => {
      e.preventDefault();
      setModalActive(true);
    };
    const confirmDeleteHandler = () => {
      callback(city);
    };
    const updateCityWeather = () => {
      dispatch(requestCurrentWeather({ city, initRequest: false }));
    };

    return (
      <>
        <NavLink to={`/${city}`}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.cityTitle}>{city}</h1>
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
          </div>
        </NavLink>
        <div className={styles.buttonContainer}>
          <Button
            style={{ position: 'static' }}
            variant="contained"
            size="large"
            onClick={updateCityWeather}
          >
            Update
          </Button>
        </div>
        {isModalActive && (
          <Modal setVisible={setModalActive}>
            <div className={styles.modalTitle}>
              Are you sure you want to delete this city?
            </div>
            <div className={styles.modalButtonsContainer}>
              <Button
                color="primary"
                variant="contained"
                size="medium"
                onClick={confirmDeleteHandler}
              >
                Delete
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                onClick={() => setModalActive(false)}
              >
                Wait, NO!
              </Button>
            </div>
          </Modal>
        )}
      </>
    );
  },
);
