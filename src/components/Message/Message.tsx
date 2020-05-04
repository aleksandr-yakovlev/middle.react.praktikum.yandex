import React, { FC } from 'react';
import { Comment } from 'components/UI/Comment';

import styles from './Message.module.scss';

export interface IMessageProps {
  ava: string;
  username: string;
  message: string;
  timestamp: Date | undefined;
}

export const Message: FC<IMessageProps> = (props) => {
  const { ava, username, message, timestamp } = props;
  const contentDOM = <p className={styles.content}>{message}</p>;
  const timestampFormated = timestamp
    ? timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;
  return (
    <Comment
      avatar={ava}
      label={username}
      timestamp={timestampFormated}
      content={contentDOM}
    />
  );
};
