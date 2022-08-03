import React, { FC, useEffect } from 'react';

import { AppBar, Button, LinearProgress, Toolbar } from '@mui/material';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import styles from './App.module.css';

import { ErrorSnackbar } from 'components/Snackbar/SnackbarError';
import { Path } from 'enum/Path';
import { useAppDispatch, useAppSelector } from 'hooks/useAppHooks';
import { List } from 'pages/List/List';
import { View } from 'pages/View/View';
import { getCities, requestCurrentWeather } from 'store/reducers/WeatherReducer';
import { selectStatus } from 'store/selectors/AppSelectors';
import { RequestStatusType } from 'types/AppTypes';
import { getCitiesFromLocalStorage } from 'utils/getFromLocal';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector<RequestStatusType>(selectStatus);
  const backHomeHandler = (): void => {
    navigate(Path.Home);
  };

  useEffect(() => {
    const cities = getCitiesFromLocalStorage();

    dispatch(getCities(cities));
    cities.forEach(m => dispatch(requestCurrentWeather({ city: m })));
  }, [dispatch]);

  return (
    <div>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color="inherit" onClick={backHomeHandler}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
      {status === 'loading' && <LinearProgress color="secondary" />}
      <div className={styles.container}>
        <Routes>
          <Route path={Path.Home} element={<List />} />
          <Route path={Path.City} element={<View />} />
          <Route path={Path.ErrorPage} element={<h1>Someone made a mistake</h1>} />
          <Route path={Path.AnyOther} element={<Navigate to={Path.ErrorPage} />} />
        </Routes>
      </div>
      <ErrorSnackbar />
    </div>
  );
};

export default App;
