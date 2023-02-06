import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import styles from './View.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Forecast24Hours } from '../../components/forecast24hours/Forecast24Hours';
import { HourlyForecastList } from '../../types/DayWeatherType';
import { useActions } from '../../hooks/useActions';
import { ForecastHeader } from '../../components/ForecastHeader/ForecastHeader';
import { CountryStateType } from '../../types/StateTypes';

export const View = () => {
  const { city } = useParams<string>();
  const meta = useAppSelector<CountryStateType>(
    state => state.weather.forecast[city!]?.meta,
  );
  const list = useAppSelector<HourlyForecastList[]>(state => state.weather.longForecast);
  const { requestLongForecast } = useActions();

  useEffect(() => {
    requestLongForecast(city!);
  }, []);

  return (
    <div className={styles.container}>
      <ForecastHeader city={city || ''} meta={meta} />
      <Forecast24Hours list={list} />
    </div>
  );
};
