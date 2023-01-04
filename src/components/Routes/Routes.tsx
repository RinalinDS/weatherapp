import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from '../../enum/Path';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { List } from '../../pages/List/List';
import { View } from '../../pages/View/View';

import styles from './Routes.module.css';

// const PublicRoutes = [
//   <Route path={Path.Home} element={<List />} />,
//   <Route path={Path.City} element={<View />} />,
//   <Route path={Path.ErrorPage} element={<ErrorPage />} />,
//   <Route path={Path.AnyOther} element={<Navigate to={Path.ErrorPage} replace/>} />,
// ];

export const RoutesComponent = () => {
  return (
    <main className={styles.container}>
      <Routes>
        <Route path={Path.Home} element={<List />} />,
        <Route path={Path.City} element={<View />} />,
        <Route path={Path.ErrorPage} element={<ErrorPage />} />,
        <Route path={Path.AnyOther} element={<Navigate to={Path.ErrorPage} replace />} />,
      </Routes>
    </main>
  );
};
