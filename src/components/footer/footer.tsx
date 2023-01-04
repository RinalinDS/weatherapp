import React, { FC } from 'react';
import styles from './footer.module.css';
import generalStyles from './../../common/styles.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={generalStyles.container}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aut ea fugiat id,
        ipsam ipsum laudantium nostrum nulla numquam odio odit perferendis provident quia
        ratione sapiente, tempora voluptates. Aliquid ducimus ea excepturi maiores
        tempora! Accusantium architecto aut dolor eaque error hic laudantium minima minus
        nemo, quasi repellendus tempora unde!
      </div>
    </footer>
  );
};
