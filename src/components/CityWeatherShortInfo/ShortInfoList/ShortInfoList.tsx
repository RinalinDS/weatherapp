import React, { FC } from 'react';

import generalStyles from '../../../common/styles.module.css';
import { CurrentForecastType } from '../../../types/CurrentForecastType';
import { HourlyForecastList } from '../../../types/DailyForecastType';
import { useInternationalizedData } from '../../../hooks/useInternationalizedData';

type ShortInfoListPropsType = {
  forecastForCity: CurrentForecastType | HourlyForecastList;
};

export const ShortInfoList: FC<ShortInfoListPropsType> = ({ forecastForCity }) => {
  const { temp, windSpeed, feelsLike, pressure } =
    useInternationalizedData(forecastForCity);

  return (
    <ul className={generalStyles.list}>
      <li>
        <b>Temperature:</b>
        <span className={generalStyles.padding}>{temp}</span>
      </li>
      <li>
        <b>Feels like:</b>
        <span className={generalStyles.padding}>{feelsLike}</span>
      </li>
      <li>
        <b>Wind speed:</b>
        <span className={generalStyles.padding}>{windSpeed}</span>
      </li>
      <li>
        <b>Pressure:</b>
        <span className={generalStyles.padding}>{pressure}</span>
      </li>
    </ul>
  );
};
