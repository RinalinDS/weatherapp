import React, { FC, memo, useState } from 'react';

import { Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { DeleteModal } from '../Modal/DeleteModal/DeleteModal';

import CardHeader from './CardHeader/CardHeader';
import styles from './CityWeatherShortInfo.module.css';
import { ShortInfoList } from './ShortInfoList/ShortInfoList';
import { ForecastType } from 'types/StateTypes';
import { useActions } from '../../hooks/useActions';

type CityWeatherShortInfoPropsType = {
  city: string;
  forecastForCity: ForecastType;
  callback: (city: string) => void;
};

const CustomButton = styled(Button)(() => ({
  position: 'static',
  fontSize: '1.4rem',
}));

export const CityWeatherShortInfo: FC<CityWeatherShortInfoPropsType> = memo(
  ({ city, callback, forecastForCity }) => {
    const { requestCurrentWeather } = useActions();
    const [isModalActive, setModalActive] = useState<boolean>(false);

    const confirmDeleteHandler = () => {
      callback(city);
    };
    const updateCityWeather = () => {
      requestCurrentWeather({ city, initRequest: false });
    };

    return (
      <>
        <NavLink to={`/${city}`} className={styles.link}>
          <div className={styles.card}>
            <CardHeader city={city} setModalActive={setModalActive} />
            <div className={styles.listDiv}>
              <ShortInfoList forecastForCity={forecastForCity?.forecast} />
            </div>
          </div>
        </NavLink>
        <div className={styles.buttonContainer}>
          <CustomButton variant="contained" size="large" onClick={updateCityWeather}>
            Update
          </CustomButton>
        </div>
        <DeleteModal
          isModalActive={isModalActive}
          confirmDeleteHandler={confirmDeleteHandler}
          setModalActive={setModalActive}
        />
      </>
    );
  },
);
