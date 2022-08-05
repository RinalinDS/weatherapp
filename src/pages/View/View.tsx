import React from 'react';

import { useParams } from 'react-router-dom';

import styles from './View.module.css';

import { useAppSelector } from 'hooks/useAppHooks';
import { ForecastType } from 'types/StateTypes';
import { getTime } from 'utils/getTime';

export const View = () => {
  const { city } = useParams();
  const forecast = useAppSelector<ForecastType>(state => state.weather.forecast[city!]);
  const [sunsetTime, sunriseTime] = getTime(
    forecast?.forecast?.sys?.sunset,
    forecast?.forecast?.sys?.sunrise,
  );
  const weatherIcon = forecast?.forecast.weather[0]?.icon
    ? `http://openweathermap.org/img/wn/${forecast?.forecast.weather[0]?.icon}@2x.png`
    : '';

  return (
    <div>
      <div className={styles.container}>
        <h2>
          {city}, {forecast?.meta?.name ? forecast?.meta?.name : ''},{' '}
          <img src={forecast?.meta?.flags?.svg} alt="Country flag" />
        </h2>
        <div>
          <img src={weatherIcon} alt="weather icon" />
        </div>
        <div>
          <ul className={styles.list}>
            <li>
              <b>Temperature:</b> {forecast?.forecast?.main?.temp}°C
            </li>
            <li>
              <b>Feels like:</b> {forecast?.forecast?.main?.feels_like} °C
            </li>
            <li>
              <b>Wind speed:</b> {forecast?.forecast?.wind?.speed} m/s
            </li>
            <li>
              <b>Pressure:</b> {forecast?.forecast?.main?.pressure} mm
            </li>
            <li>
              <b>Humidity:</b> {forecast?.forecast?.main?.humidity}%
            </li>
            <li>
              <b>Sunset:</b> {sunsetTime || ''}
            </li>
            <li>
              <b>Sunrise:</b> {sunriseTime || ''}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
