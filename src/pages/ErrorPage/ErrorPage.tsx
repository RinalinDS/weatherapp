import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const backOneLevelHandler = () => navigate(-2);
  const ErrorText = `Someone made a mistake, press Home or`;

  return (
    <div className={styles.container}>
      <h1 className={styles.errorText}>
        {ErrorText}{' '}
        <span className={styles.link} onClick={backOneLevelHandler}>
          click here
        </span>
      </h1>
    </div>
  );
};
