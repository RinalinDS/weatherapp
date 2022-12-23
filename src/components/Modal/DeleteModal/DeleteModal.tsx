import React, { FC } from 'react';

import { Button } from '@mui/material';

import styles from '../../CityWeatherShortInfo/CityWeatherShortInfo.module.css';
import { Modal } from '../Modal';

type DeleteModalPropsType = {
  isModalActive: boolean;
  confirmDeleteHandler: () => void;
  setModalActive: (value: boolean) => void;
};

export const DeleteModal: FC<DeleteModalPropsType> = ({
  isModalActive,
  confirmDeleteHandler,
  setModalActive,
}) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!isModalActive) return <></>;

  return (
    <Modal setVisible={setModalActive}>
      <div className={styles.modalTitle}>Are you sure you want to delete this city?</div>
      <div className={styles.modalButtonsContainer}>
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={confirmDeleteHandler}
        >
          Delete
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          onClick={() => setModalActive(false)}
        >
          Wait, NO!
        </Button>
      </div>
    </Modal>
  );
};
