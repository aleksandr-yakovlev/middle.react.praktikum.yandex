import React, { FC } from 'react';

import { List } from '../UI/List';

import { Message, IMessageProps } from 'components/Message';

import styles from './MessageList.module.scss';

export type chatMessagesType = IMessageProps;

export interface IMessageListProps {
  isActive: boolean;
  chatMessages: chatMessagesType[];
}

export const MessageList: FC<IMessageListProps> = (props) => {
  const { chatMessages, isActive } = props;
  return isActive ? (
    <List className={styles.messagelist}>
      {chatMessages.map((messageProps) => (
        <Message key={messageProps.timestamp?.getTime()} {...messageProps} />
      ))}
    </List>
  ) : (
    <div className={`${styles.messagelist} ${styles.blank}`}>
      Выберите чат...
    </div>
  );
};
