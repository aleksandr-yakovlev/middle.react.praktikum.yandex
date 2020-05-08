import React, { FC } from 'react';
import { dateCompare } from 'modules/dateCompare';

import { List } from '../UI/List';
import { Message } from 'components/Message';

import styles from './MessageList.module.scss';

interface IUser {
  name: string;
  ava: string;
}

export interface IMessagesData {
  users: Record<string, IUser>;
  messages: {
    messageId: string;
    authorId: string;
    text: string;
    timestamp: Date;
  }[];
}

export interface IMessageListProps {
  data: IMessagesData | undefined;
}

export const MessageList: FC<IMessageListProps> = (props) => {
  const { data } = props;
  const defaultUser: IUser = {
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
    name: 'Удалено',
  };
  const thisYear = new Date().getFullYear();
  return data ? (
    <List className={styles.messagelist}>
      {data.messages.map(
        ({ messageId, authorId, text, timestamp }, index, messages) => {
          const isSameAutor = authorId === (messages[index - 1] || {}).authorId;
          const isSameDay = dateCompare(
            timestamp,
            (messages[index - 1] || {}).timestamp,
          );
          const isThisYear = timestamp.getFullYear() === thisYear;
          return (
            <div key={messageId}>
              {!isSameDay && (
                <p className={styles.timestampSeparator}>
                  {timestamp
                    .toLocaleDateString([], {
                      weekday: 'short',
                      year: !isThisYear ? 'numeric' : undefined,
                      month: 'long',
                      day: 'numeric',
                    })
                    .replace(/\s*г\./, '')}
                </p>
              )}
              <Message
                id={messageId}
                ava={
                  !isSameAutor
                    ? (data.users[authorId] || defaultUser).ava
                    : undefined
                }
                username={
                  !isSameAutor
                    ? (data.users[authorId] || defaultUser).name
                    : undefined
                }
                text={text}
                timestamp={timestamp}
              />
            </div>
          );
        },
      )}
    </List>
  ) : (
    <div className={`${styles.messagelist} ${styles.blank}`}>
      Выберите чат...
    </div>
  );
};
