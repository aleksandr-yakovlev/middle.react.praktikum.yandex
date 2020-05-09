import React, { FC } from 'react';
import CSS from 'csstype';
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
  data: IMessagesData;
  style?: CSS.Properties;
}

export const MessageList: FC<IMessageListProps> = (props) => {
  const { data, style } = props;
  const defaultUser: IUser = {
    ava: 'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
    name: 'Удалено',
  };
  const getFormatedData = (date: Date) => {
    const thisYear = new Date().getFullYear();
    return date
      .toLocaleDateString([], {
        weekday: 'short',
        year: date.getFullYear() === thisYear ? 'numeric' : undefined,
        month: 'long',
        day: 'numeric',
      })
      .replace(/\s*г\./, '');
  };
  const getTimestampDOM = (timestamp: Date) => {
    return (
      <p className={styles.timestampSeparator}>{getFormatedData(timestamp)}</p>
    );
  };
  return (
    <List className={styles.messagelist} style={{ height: '100%', ...style }}>
      {data.messages.map((props, index, messages) => {
        const { messageId, authorId, text, timestamp } = props;
        const message = messages[index - 1] || {};
        const isSameAutor = authorId === message.authorId;
        const isSameDay = dateCompare(timestamp, message.timestamp);
        let user = data.users[authorId] || defaultUser;
        return (
          <div key={messageId}>
            {!isSameDay && getTimestampDOM(timestamp)}
            <Message
              id={messageId}
              ava={!isSameAutor || !isSameDay ? user.ava : undefined}
              username={!isSameAutor || !isSameDay ? user.name : undefined}
              text={text}
              timestamp={timestamp}
            />
          </div>
        );
      })}
    </List>
  );
};
