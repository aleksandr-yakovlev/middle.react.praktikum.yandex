import React from 'react';

import { IProps } from './types';

import styles from './Item.module.scss';

const dateCompare = (date1: Date, date2: Date = new Date()): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const Item = (props: IProps) => {
  const { ava, label, username, shortmessage, timestamp } = props;
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img className={styles.ava} src={ava} alt="" />
      </div>
      <div className={styles.right}>
        <p className={styles.top}>
          <span className={styles.label}>{label}</span>
          <span className={styles.timestamp}>
            {timestamp
              ? dateCompare(timestamp)
                ? timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : timestamp.toLocaleDateString()
              : null}
          </span>
        </p>
        <p className={styles.bottom}>
          <span>{username}: </span>
          <span>{shortmessage}</span>
        </p>
      </div>
    </div>
  );
};
