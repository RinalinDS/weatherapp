import React from 'react';

import { useParams } from 'react-router-dom';

import generalStyles from '../../common/styles.module.css';
import { FullWeatherListInfo } from '../../components/FullWeatherListInfo/FullWeatherListInfo';

import styles from './View.module.css';

import { useAppSelector } from 'hooks/useAppHooks';
import { ForecastType } from 'types/StateTypes';

export const View = () => {
  const { city } = useParams();
  const forecast = useAppSelector<ForecastType>(state => state.weather.forecast[city!]);

  const weatherIcon = forecast?.forecast.weather[0]?.icon
    ? `http://openweathermap.org/img/wn/${forecast?.forecast.weather[0]?.icon}@2x.png`
    : '';

  return (
    <div>
      <div className={styles.container}>
        <h2 className={generalStyles.cityName}>
          {city}, {forecast?.meta?.name ? forecast?.meta?.name : ''},{' '}
          <img
            className={styles.flag}
            src={forecast?.meta?.flags?.svg}
            alt="Country flag"
          />
        </h2>
        <div>
          <img src={weatherIcon} alt="weather icon" />
        </div>
        <FullWeatherListInfo forecast={forecast.forecast} />
      </div>
    </div>
  );
};
