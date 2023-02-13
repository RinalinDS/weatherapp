import React, { FC } from 'react';

import generalStyles from '../../../common/styles.module.css';
import { CityWeatherType } from '../../../types/APIWeatherType';
import { HourlyForecastList } from '../../../types/DayWeatherType';

type ShortInfoListPropsType = {
  forecastForCity: CityWeatherType | HourlyForecastList;
};

export const ShortInfoList: FC<ShortInfoListPropsType> = ({ forecastForCity }) => {
  return (
    <ul className={generalStyles.list}>
      <li>
        <span>
          <b>Temperature:</b>
        </span>{' '}
        <span>{forecastForCity?.main?.temp}°C</span>
      </li>
      <li>
        <b>Feels like:</b> {forecastForCity?.main?.feels_like}°C
      </li>
      <li>
        <b>Wind speed:</b> {forecastForCity?.wind?.speed} m/s
      </li>
      <li>
        <b>Pressure:</b> {forecastForCity?.main?.pressure} mm
      </li>
    </ul>
  );
};
