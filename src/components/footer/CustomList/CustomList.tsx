import React, { FC } from 'react';
import { ContactType } from 'types/UtilTypes';
import styles from '../footer.module.css';

type CustomListPropsType = {
  items: ContactType[];
  title: string;
};

export const CustomList: FC<CustomListPropsType> = ({ items, title }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((m, i) => (
          <li key={i}>
            <a className={styles.footerLink} href={m.href}>
              {m.text} {m.icon || ''}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
