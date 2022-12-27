import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-magic-numbers
  const backOneLevelHandler = () => navigate(-2);
  const ErrorText = `Someone made a mistake, press Home or`;

  return (
    <div className={styles.container}>
      <h1 className={styles.errorText}>
        {ErrorText}{' '}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <span className={styles.link} onClick={backOneLevelHandler}>
          click here
        </span>
      </h1>
    </div>
  );
};
