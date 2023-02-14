import React, { FC } from 'react';
import generalStyles from '../../common/styles.module.css';
import styles from '../../pages/View/View.module.css';
import { MetaStateType } from '../../types/StateTypes';

type PropsType = {
  city: string;
  meta: MetaStateType;
};

export const DetailedForecastHeader: FC<PropsType> = props => {
  const { city, meta } = props;
  return (
    <h2 className={generalStyles.cityName}>
      {city}, {meta?.name || ''},{' '}
      <img className={styles.flag} src={meta?.flags?.svg} alt="Country flag" />
    </h2>
  );
};
