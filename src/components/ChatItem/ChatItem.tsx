import React, { FC } from 'react';
import { Comment } from 'components/UI/Comment';

import styles from './ChatItem.module.scss';

const dateCompare = (date1: Date, date2: Date = new Date()): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

enum ETypeItem {
  personal = 0,
  group,
  channel,
}

export interface IChatItemProps extends React.HTMLProps<HTMLDivElement> {
  chatId: string;
  chatType: ETypeItem;
  ava: string;
  label: string;
  username?: string;
  shortmessage: string;
  timestamp: Date;
}

export const ChatItem: FC<IChatItemProps> = (props) => {
  const {
    chatType,
    ava,
    label,
    username,
    shortmessage,
    timestamp,
    chatId,
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
