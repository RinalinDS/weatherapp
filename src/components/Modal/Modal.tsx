import React, { FC, ReactNode, SyntheticEvent, useEffect } from 'react';

import styles from './Modal.module.css';

type ModalPropsType = {
  children: ReactNode;
  setVisible: (value: boolean) => void;
  isModalActive: boolean;
};

export const Modal: FC<ModalPropsType> = ({ children, setVisible, isModalActive }) => {
  const onClickHandler = () => {
    setVisible(false);
  };
  const stopPropagationHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const onEscapeKeyHandler = function (this: Window, ev: KeyboardEvent) {
      if (ev.key === 'Escape') setVisible(false);
    };
    window.addEventListener('keydown', onEscapeKeyHandler);
    return () => {
      window.removeEventListener('keydown', onEscapeKeyHandler);
    };
  }, [setVisible]);
  if (!isModalActive) return null;

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.modal} onClick={stopPropagationHandler}>
        {children}
      </div>
    </div>
  );
};
