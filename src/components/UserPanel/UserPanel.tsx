import React, { FC, MouseEvent } from 'react';

import styles from './UserPanel.module.scss';

export interface IUserPanelProps {
  userId: string;
  Logout: (e: MouseEvent<HTMLElement>) => void;
}

export const UserPanel: FC<IUserPanelProps> = ({ userId, Logout }) => {
  return (
    <div className={styles.user}>
      <p>Пользователь: {userId}</p>
      <p onClick={Logout} className={styles.exit}>
        Выйти
      </p>
    </div>
  );
};
