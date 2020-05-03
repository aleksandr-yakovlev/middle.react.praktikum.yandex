import React, { FunctionComponent } from 'react';
import { Comment } from 'components/UI/Comment';

import { IProps } from './types';

import styles from './ChatItem.module.scss';

const dateCompare = (date1: Date, date2: Date = new Date()): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const ChatItem: FunctionComponent<IProps> = (props) => {
  const {
    chatType,
    ava,
    label,
    username,
    shortmessage,
    timestamp,
    chatId,
    isPinned,
    className,
    ...divProps
  } = props;
  const contentDOM = (
    <p className={styles.content}>
      {/* не отображаем имя для личных чатов */}
      {chatType !== 0 ? `${username}: ` : null}
      {shortmessage}
    </p>
  );
  const timestampFormated = timestamp
    ? dateCompare(timestamp)
      ? timestamp.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      : timestamp.toLocaleDateString()
    : null;
  return (
    <div className={`${styles.item} ${className}`} {...divProps}>
      <Comment
        avatar={ava}
        label={label}
        timestamp={timestampFormated}
        content={contentDOM}
      />
    </div>
  );
};
