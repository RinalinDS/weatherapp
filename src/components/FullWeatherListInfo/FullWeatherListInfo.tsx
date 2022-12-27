import React, { FC } from 'react';

import generalStyles from '../../common/styles.module.css';
import { CityWeatherType } from '../../types/APIWeatherType';
import { getTime } from '../../utils/getTime';

type FullWeatherListInfoPropsType = {
  forecast: CityWeatherType;
};

export const FullWeatherListInfo: FC<FullWeatherListInfoPropsType> = ({ forecast }) => {
  const [sunsetTime, sunriseTime] = getTime(
    forecast?.sys?.sunset,
    forecast?.sys?.sunrise,
  );

  return (
    <ul className={generalStyles.list}>
      <li>
        <b>Temperature:</b> {forecast?.main?.temp}°C
      </li>
      <li>
        <b>Feels like:</b> {forecast?.main?.feels_like} °C
      </li>
      <li>
        <b>Wind speed:</b> {forecast?.wind?.speed} m/s
      </li>
      <li>
        <b>Pressure:</b> {forecast?.main?.pressure} mm
      </li>
      <li>
        <b>Humidity:</b> {forecast?.main?.humidity}%
      </li>
      <li>
        <b>Sunset:</b> {sunsetTime || ''}
      </li>
      <li>
        <b>Sunrise:</b> {sunriseTime || ''}
      </li>
    </ul>
  );
};
