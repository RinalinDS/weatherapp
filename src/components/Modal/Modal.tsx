import React, { FC, ReactNode } from 'react';

import cl from './Modal.module.css';

type ModalPropsType = {
  children: ReactNode;
  setVisible: (value: boolean) => void;
};

export const Modal: FC<ModalPropsType> = ({ children, setVisible }) => {
  const onClickHanlder = () => {
    setVisible(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div className={cl.container} onClick={onClickHanlder}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
      <div
        className={cl.modal}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
