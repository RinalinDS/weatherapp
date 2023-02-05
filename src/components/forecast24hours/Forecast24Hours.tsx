import React, { FC } from 'react';
import { HourlyForecastList } from '../../types/DayWeatherType';
import styles from './Forecast24hours.module.css';

export const Forecast24Hours: FC<{ list: HourlyForecastList[] }> = props => {
  const { list } = props;
  return (
    <div>
      <ul className={styles.list}>
        {list.map((m, index) => {
          return (
            <li key={index}>
              <Table element={m} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Table: FC<{ element: HourlyForecastList }> = ({ element }) => {
  let [date, time] = element.dt_txt.split(' ');
  let etime = time.slice(0, -3);

  const weatherIcon = element.weather[0]?.icon
    ? `http://openweathermap.org/img/wn/${element.weather[0]?.icon}@2x.png`
    : '';
  return (
    <div>
      <table>
        <thead>
          <tr className={styles.head}>
            <th>{date}</th>
            <th>{etime}</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.imgcontainer}>
            <td>
              <img src={weatherIcon} alt={'weather icon'} className={styles.img} />
            </td>
          </tr>
          <tr>
            <th>Temperature:</th>
            <td>{element.main.temp} &#8451;</td>
          </tr>
          <tr>
            <th>Feels like:</th>
            <td>{element.main.feels_like} &#8451;</td>
          </tr>
          <tr>
            <th>Pressure:</th>
            <td>{element.main.pressure} Pa</td>
          </tr>
          <tr>
            <th>Wind Speed:</th>
            <td>{element.wind.speed} mp/h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
