import React, { FC, ReactNode, SyntheticEvent } from 'react';

import styles from './Modal.module.css';

type ModalPropsType = {
  children: ReactNode;
  setVisible: (value: boolean) => void;
};

export const Modal: FC<ModalPropsType> = ({ children, setVisible }) => {
  const onClickHandler = () => {
    setVisible(false);
  };
  const stopPropagationHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div className={styles.container} onClick={onClickHandler}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
      <div className={styles.modal} onClick={stopPropagationHandler}>
        {children}
      </div>
    </div>
  );
};
