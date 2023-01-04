import React, { FC, useEffect, useState } from 'react';

import { LinearProgress } from '@mui/material';

import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { RoutesComponent } from './components/Routes/Routes';

import { ErrorSnackbar } from 'components/Snackbar/SnackbarError';
import { useAppDispatch, useAppSelector } from 'hooks/useAppHooks';
import { requestCurrentWeather } from 'store/reducers/WeatherReducer';
import { selectStatus } from 'store/selectors/AppSelectors';
import { RequestStatusType } from 'types/AppTypes';
import { Footer } from './components/footer/footer';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector<RequestStatusType>(selectStatus);
  const cities = useAppSelector<string[]>(state => state.weather.cities);

  const [isLoading, setIsLoaded] = useState(true);

  useEffect(() => {
    cities.forEach(city => dispatch(requestCurrentWeather({ city })));
    setIsLoaded(false);
  }, []);

  if (isLoading) return <h1 className={styles.loader}>INITIAL LOADING....</h1>;

  return (
    <div className={styles.container}>
      <Header />
      {status === 'loading' && <LinearProgress color="secondary" />}
      <RoutesComponent />
      <ErrorSnackbar />
      <Footer />
    </div>
  );
};

export default App;
