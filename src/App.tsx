import React, { FC, useEffect, useState } from 'react';

import { LinearProgress } from '@mui/material';

import { Header } from './components/Header/Header';
import { RoutesComponent } from './components/Routes/Routes';

import { ErrorSnackbar } from 'components/Snackbar/SnackbarError';
import { useAppDispatch, useAppSelector } from 'hooks/useAppHooks';
import { requestCurrentWeather } from 'store/reducers/WeatherReducer';
import { selectStatus } from 'store/selectors/AppSelectors';
import { RequestStatusType } from 'types/AppTypes';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector<RequestStatusType>(selectStatus);
  const cities = useAppSelector<string[]>(state => state.weather.cities);

  const [isLoading, setIsLoaded] = useState(true);

  useEffect(() => {
    cities.forEach(city => dispatch(requestCurrentWeather({ city })));
    setIsLoaded(false);
  }, []);

  if (isLoading)
    return (
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        INITIAL LOADING....
      </h1>
    );

  return (
    <div>
      <Header />
      {status === 'loading' && <LinearProgress color="secondary" />}
      <RoutesComponent />
      <ErrorSnackbar />
    </div>
  );
};

export default App;
