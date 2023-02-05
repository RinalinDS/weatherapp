import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import styles from './View.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Forecast24Hours } from '../../components/forecast24hours/Forecast24Hours';
import { HourlyForecastList } from '../../types/DayWeatherType';
import { useActions } from '../../hooks/useActions';
import { ForecastHeader } from '../../components/ForecastHeader/ForecastHeader';
import { CountryStateType } from '../../types/StateTypes';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const View = () => {
  const { city } = useParams<string>();
  const meta = useAppSelector<CountryStateType>(
    state => state.weather.forecast[city!]?.meta,
  );
  const list = useAppSelector<HourlyForecastList[]>(state => state.weather.longForecast);
  const { requestLongForecast } = useActions();

  const data = list.map(m => ({
    subject: m.dt_txt.split(' ')[1],
    temperature: `${m.main.temp}`,
  }));

  useEffect(() => {
    requestLongForecast(city!);
  }, []);

  return (
    <div className={styles.container}>
      <ForecastHeader city={city || ''} meta={meta} />
      <Forecast24Hours list={list} />
      <h3> Temperature, &#8451;</h3>
      <ResponsiveContainer width={'99%'} aspect={2}>
        <LineChart data={data}>
          <XAxis dataKey="subject" />
          <Line dataKey="temperature" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
