import React, { FC, SyntheticEvent } from 'react';

import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import styles from './CardHeader.module.css';

type CardHeaderPropsType = {
  city: string;
  setModalActive: (value: boolean) => void;
};

export const CardHeader: FC<CardHeaderPropsType> = ({ setModalActive, city }) => {
  const callbackHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setModalActive(true);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.cityTitle}>{city}</h1>
      <IconButton size="medium" style={{ position: 'static' }} onClick={callbackHandler}>
        <Delete fontSize="small" />
      </IconButton>
    </div>
  );
};

export default CardHeader;
