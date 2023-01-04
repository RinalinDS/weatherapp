import React, { FC } from 'react';
import styles from './footer.module.css';
import generalStyles from './../../common/styles.module.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from './../../assets/logo.jpg';

type footerPropsType = {
  isListEmpty: boolean;
};

export const Footer: FC<footerPropsType> = ({ isListEmpty }) => {
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
          <div className={styles.contacts}>
            <h2 className={styles.title}>Creator's contacts</h2>
            <ul className={styles.list}>
              <li>
                <a className={styles.footerLink} href="https://t.me/RinalinDSl">
                  Write to me in <TelegramIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a
                  className={styles.footerLink}
                  href="https://www.linkedin.com/in/denis-pilyutin-647514197/"
                >
                  Connect with me via <LinkedInIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="https://github.com/RinalinDS">
                  Watch source code on <GitHubIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h2 className={styles.title}>Resources</h2>
            <ul className={styles.list}>
              <li>
                <a className={styles.footerLink} href="#">
                  About
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="#">
                  For Business
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
