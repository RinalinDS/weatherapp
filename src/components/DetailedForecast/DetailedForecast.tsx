import React, { FC } from 'react';
import { HourlyForecastList } from '../../types/DailyForecastType';
import styles from './DetailedForecast.module.css';
import { DetailedForecastList } from './DetailedForecastList/DetailedForecastList';

export const DetailedForecast: FC<{ list: HourlyForecastList[] }> = props => {
  const { list } = props;
  return (
    <div>
      <ul className={styles.list}>
        {list.map((m, index) => {
          return (
            <li key={index}>
              <DetailedForecastList element={m} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
