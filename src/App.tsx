import React, { FC, useEffect, useState } from 'react';

import { LinearProgress } from '@mui/material';
import { Header } from './components/Header/Header';
import { RoutesComponent } from './components/Routes/Routes';

import { ErrorSnackbar } from 'components/Snackbar/SnackbarError';
import { selectStatus } from 'store/selectors/AppSelectors';
import { RequestStatusType } from 'types/AppTypes';
import { Footer } from './components/footer/footer';
import { useAppSelector } from './hooks/useAppSelector';
import { useActions } from './hooks/useActions';
import { Preloader } from './components/Preloader/Preloader';

export const App: FC = () => {
  const { requestCurrentWeather } = useActions();
  const status = useAppSelector<RequestStatusType>(selectStatus);
  const cities = useAppSelector<string[]>(state => state.weather.cities);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cities.forEach(city => requestCurrentWeather({ city }));
    setIsLoading(false);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <div>
      <Header />
      {status === 'loading' && <LinearProgress color="secondary" />}
      <RoutesComponent />
      <ErrorSnackbar />
      <Footer isListEmpty={cities.length === 0} />
    </div>
  );
};

export default App;
