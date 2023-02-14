import React, { FC, useEffect, useState } from 'react';

import { LinearProgress } from '@mui/material';
import { Header } from './components/Header/Header';
import { RoutesComponent } from './components/Routes/Routes';

import { ErrorSnackbar } from 'components/Snackbar/SnackbarError';
import { selectCities, selectStatus } from 'store/selectors/AppSelectors';
import { RequestStatusType } from 'types/AppTypes';
import { Footer } from './components/footer/footer';
import { useAppSelector } from './hooks/useAppSelector';
import { useActions } from './hooks/useActions';
import { Preloader } from './components/Preloader/Preloader';

export const App: FC = () => {
  const { requestCurrentForecast } = useActions();
  const status = useAppSelector<RequestStatusType>(selectStatus);
  const cities = useAppSelector<string[]>(selectCities);

  const [isInitLoading, setIsInitLoading] = useState(true);

  useEffect(() => {
    cities.forEach(city => requestCurrentForecast({ city }));
    setIsInitLoading(false);
  }, []);

  if (isInitLoading) return <Preloader />;

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
