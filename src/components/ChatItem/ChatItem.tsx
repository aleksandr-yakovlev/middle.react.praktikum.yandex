import React, { FC, MouseEvent } from 'react';
import { dateCompare } from 'utils/dateCompare';

import { Comment } from 'components/UI/Comment';

import styles from './ChatItem.module.scss';

enum ETypeItem {
  personal = 0,
  group,
  channel,
}

export interface IChatItemProps {
  chatId: string;
  chatType: ETypeItem;
  ava: string;
  label: string;
  username?: string;
  shortmessage: string;
  timestamp: Date;
  className: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const ChatItem: FC<IChatItemProps> = ({
  chatType,
  ava,
  label,
  username,
  shortmessage,
  timestamp,
  className,
  onClick,
}) => {
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
    <div className={`${styles.item} ${className}`} onClick={onClick}>
      <Comment
        avatar={ava}
        label={label}
        timestamp={timestampFormated}
        content={contentDOM}
      />
    </div>
  );
};
