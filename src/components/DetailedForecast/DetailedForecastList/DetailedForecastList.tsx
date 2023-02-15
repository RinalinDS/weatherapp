import React, { FC } from 'react';
import { HourlyForecastList } from '../../../types/DailyForecastType';
import styles from './DetailedForecastList.module.css';
import { ShortInfoList } from '../../CityWeatherShortInfo/ShortInfoList/ShortInfoList';
import { useDetailedForecastListData } from '../../../hooks/useDetailedForecastListData';

export const DetailedForecastList: FC<{ element: HourlyForecastList }> = ({
  element,
}) => {
  const { date, etime, weatherIcon } = useDetailedForecastListData(element);

  return (
    <div>
      <div className={styles.head}>
        <div>{date}</div>
        <div>{etime}</div>
      </div>
      <div className={styles.imgContainer}>
        <img src={weatherIcon} alt={'weather icon'} className={styles.img} />
      </div>
      <div className={styles.helper}>
        {/*i need this div above to inherit line height from it*/}
        <ShortInfoList forecastForCity={element} />
      </div>
    </div>
  );
};
