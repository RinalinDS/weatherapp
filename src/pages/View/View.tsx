import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import styles from './View.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { DetailedForecast } from '../../components/forecast24hours/DetailedForecast';
import { useActions } from '../../hooks/useActions';
import { DetailedForecastHeader } from '../../components/ForecastHeader/ForecastHeader';
import {
  selectCityMeta,
  selectLongForecast,
} from '../../store/selectors/WeatherSelectors';

export const View = () => {
  // TODO Rename component
  const { city } = useParams<string>();
  const meta = useAppSelector(state => selectCityMeta(state, city!));
  const list = useAppSelector(selectLongForecast);
  // basically dispatch(requestLongForecast)  but dispatch hidden inside.
  const { requestLongForecast } = useActions();

  useEffect(() => {
    requestLongForecast(city!);
  }, []);

  return (
    <div className={styles.container}>
      <DetailedForecastHeader city={city || ''} meta={meta} />
      <DetailedForecast list={list} />
    </div>
  );
};
