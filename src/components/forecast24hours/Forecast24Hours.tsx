import React, { FC } from 'react';
import { HourlyForecastList } from '../../types/DayWeatherType';
import styles from './Forecast24hours.module.css';
import { ShortInfoList } from '../CityWeatherShortInfo/ShortInfoList/ShortInfoList';

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
      <div className={styles.head}>
        <div>{date}</div>
        <div>{etime}</div>
      </div>
      <div className={styles.imgcontainer}>
        <img src={weatherIcon} alt={'weather icon'} className={styles.img} />
      </div>
      <div className={styles.listDiv}>
        {' '}
        {/*эта дивка , нужна чтобы от нее лист снизу мог унаследовать line-height*/}
        <ShortInfoList forecastForCity={element} />
      </div>
    </div>
  );
};
