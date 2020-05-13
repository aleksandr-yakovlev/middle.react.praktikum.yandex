import React, { FC } from 'react';

import { Comment } from 'components/UI/Comment';

import styles from './Message.module.scss';

export interface IMessageProps {
  id: string;
  ava?: string;
  username?: string;
  text: string;
  timestamp?: Date;
}

export const Message: FC<IMessageProps> = ({
  ava,
  username,
  text,
  timestamp,
}) => {
  const avaDOM = (
    <div className={styles.avatar}>
      <img className={styles.imgAvatar} src={ava} alt="" />
    </div>
  );
  const contentDOM = <p className={styles.content}>{text}</p>;
  const timestampFormated = timestamp
    ? timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;
  return (
    <Comment
      avatar={avaDOM}
      label={username}
      timestamp={timestampFormated}
      content={contentDOM}
      isCenterTimestamp={true}
    />
  );
};
