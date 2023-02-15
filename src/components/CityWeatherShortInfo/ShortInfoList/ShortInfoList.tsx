import React, { FC } from 'react';

import generalStyles from '../../../common/styles.module.css';
import { CurrentForecastType } from '../../../types/CurrentForecastType';
import { HourlyForecastList } from '../../../types/DailyForecastType';

type ShortInfoListPropsType = {
  forecastForCity: CurrentForecastType | HourlyForecastList;
};

export const ShortInfoList: FC<ShortInfoListPropsType> = ({ forecastForCity }) => {
  return (
    <ul className={generalStyles.list}>
      <li>
        <b>Temperature:</b>
        <span className={generalStyles.padding}>
          {Math.round(forecastForCity?.main?.temp)} °C
        </span>
      </li>
      <li>
        <b>Feels like:</b>
        <span className={generalStyles.padding}>
          {Math.round(forecastForCity?.main?.feels_like)} °C
        </span>
      </li>
      <li>
        <b>Wind speed:</b>
        <span className={generalStyles.padding}>
          {Math.round(forecastForCity?.wind?.speed)} m/s
        </span>
      </li>
      <li>
        <b>Pressure:</b>
        <span className={generalStyles.padding}>
          {Math.round(forecastForCity?.main?.pressure)} mm
        </span>
      </li>
    </ul>
  );
};
