import React, { FC } from 'react';
import styles from './footer.module.css';
import generalStyles from './../../common/styles.module.css';
import logo from './../../assets/logo.jpg';
import { CustomList } from './CustomList/CustomList';
import { contactItems, ResourcesList } from '../../utils/data';

export const Footer: FC<{ isListEmpty: boolean }> = ({ isListEmpty }) => {
  const footerStyle = `${styles.footer} ${
    isListEmpty ? styles.footerFixed : styles.footerNotFixed
  }`;
  return (
    <footer className={footerStyle}>
      <div className={generalStyles.container}>
        <div className={styles.grid}>
          <div className={styles.logoColumn}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.copyright}>
              Copyright &copy; <span className={styles.year}>2027</span> by Denis
              Dmitrievich. All rights reserved
            </p>
          </div>
          <CustomList items={contactItems} title={`Creator's contacts`} />
          <CustomList items={ResourcesList} title={'Resources'} />
        </div>
      </div>
    </footer>
  );
};
