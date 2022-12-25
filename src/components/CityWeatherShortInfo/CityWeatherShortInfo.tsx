import React, { FC, memo, SyntheticEvent, useState } from 'react';

import { Delete } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { DeleteModal } from '../Modal/DeleteModal/DeleteModal';

import styles from './CityWeatherShortInfo.module.css';
import ShortInfoList from './ShortInfoList/ShortInfoList';

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
        <NavLink to={`/${city}`} className={styles.link}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.cityTitle}>{city}</h1>
              <IconButton
                size="medium"
                style={{ position: 'static' }}
                onClick={callbackHandler}
              >
                <Delete fontSize="small" />
              </IconButton>
            </div>
            <ShortInfoList forecastForCity={forecastForCity} />
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
        <DeleteModal
          isModalActive={isModalActive}
          confirmDeleteHandler={confirmDeleteHandler}
          setModalActive={setModalActive}
        />
      </>
    );
  },
);
