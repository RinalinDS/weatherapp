import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from '../../enum/Path';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { MainPage } from '../../pages/List/MainPage';
import { DetailedPage } from '../../pages/DetailedPage/DetailedPage';

import styles from './Routes.module.css';

export const RoutesComponent = () => {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path={Path.Home} element={<MainPage />} />,
        <Route path={Path.City} element={<DetailedPage />} />,
        <Route path={Path.ErrorPage} element={<ErrorPage />} />,
        <Route path={Path.AnyOther} element={<Navigate to={Path.ErrorPage} replace />} />,
      </Routes>
    </main>
  );
};
