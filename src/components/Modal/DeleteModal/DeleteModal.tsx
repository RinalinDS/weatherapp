import React, { FC } from 'react';

import { Button } from '@mui/material';

import { Modal } from '../Modal';

import styles from './DeleteModal.module.css';

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
  const onCancelClickHandler = () => setModalActive(false);

  return (
    <Modal setVisible={setModalActive} isModalActive={isModalActive}>
      <div className={styles.modalTitle}>Are you sure you want to delete this city?</div>
      <div className={styles.modalButtonsContainer}>
        <Button
          style={{ position: 'static' }}
          color="primary"
          variant="contained"
          size="medium"
          onClick={confirmDeleteHandler}
        >
          Delete
        </Button>
        <Button
          style={{ position: 'static' }}
          color="secondary"
          variant="contained"
          size="medium"
          onClick={onCancelClickHandler}
        >
          Wait, NO!
        </Button>
      </div>
    </Modal>
  );
};
