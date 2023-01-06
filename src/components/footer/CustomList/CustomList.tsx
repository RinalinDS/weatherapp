import React, { FC } from 'react';
import styles from '../footer.module.css';
import { ContactType } from '../footer';

type CustomListPropsType = {
  items: ContactType[];
  title: string;
};

export const CustomList: FC<CustomListPropsType> = ({ items, title }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map(m => (
          <li>
            <a className={styles.footerLink} href={m.href}>
              {m.text} {m.icon || ''}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
