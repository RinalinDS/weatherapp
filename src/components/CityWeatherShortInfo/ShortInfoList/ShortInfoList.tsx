import React, { FC } from 'react';

import { ForecastType } from '../../../types/StateTypes';

import styles from './ShortInfoList.module.css';

type ShortInfoListPropsType = {
  forecastForCity: ForecastType;
};

export const ShortInfoList: FC<ShortInfoListPropsType> = ({ forecastForCity }) => {
  return (
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
  );
};

export default ShortInfoList;
