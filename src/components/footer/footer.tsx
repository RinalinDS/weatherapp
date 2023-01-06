import React, { FC } from 'react';
import styles from './footer.module.css';
import generalStyles from './../../common/styles.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from './../../assets/logo.jpg';
import { CustomList } from './CustomList/CustomList';

type FooterPropsType = {
  isListEmpty: boolean;
};

export type ContactType = {
  href: string;
  text: string;
  icon?: React.ReactNode;
};

const contactItems: ContactType[] = [
  {
    href: 'https://t.me/RinalinDS',
    text: 'Write to me in',
    icon: <TelegramIcon fontSize="large" />,
  },
  {
    href: 'https://www.linkedin.com/in/denis-pilyutin-647514197/',
    text: `Connect with me via`,
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    href: 'https://github.com/RinalinDS',
    text: `Watch source code on`,
    icon: <GitHubIcon fontSize="large" />,
  },
];

const ResourcesList = [
  { href: '#', text: 'About' },
  { href: '#', text: 'Careers' },
  { href: '#', text: 'For Business' },
];

export const Footer: FC<FooterPropsType> = ({ isListEmpty }) => {
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
