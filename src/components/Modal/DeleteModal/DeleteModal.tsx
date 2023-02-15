import React, { FC } from 'react';

import { Button, styled } from '@mui/material';

import { Modal } from '../Modal';

import styles from './DeleteModal.module.css';

type DeleteModalPropsType = {
  isModalActive: boolean;
  confirmDeleteHandler: () => void;
  setModalActive: (value: boolean) => void;
  text: string;
};
const CustomButton = styled(Button)(() => ({
  position: 'static',
}));

export const DeleteModal: FC<DeleteModalPropsType> = ({
  isModalActive,
  confirmDeleteHandler,
  setModalActive,
  text,
}) => {
  const onCancelClickHandler = () => setModalActive(false);

  return (
    <Modal setVisible={setModalActive} isModalActive={isModalActive}>
      <div className={styles.modalTitle}>{text}</div>
      <div className={styles.modalButtonsContainer}>
        <CustomButton
          color="primary"
          variant="contained"
          size="medium"
          onClick={confirmDeleteHandler}
        >
          Delete
        </CustomButton>
        <CustomButton
          color="secondary"
          variant="contained"
          size="medium"
          onClick={onCancelClickHandler}
        >
          Wait, NO!
        </CustomButton>
      </div>
    </Modal>
  );
};
