import React, { FC } from 'react';

import { List } from '../UI/List';

import { Message } from 'components/Message';

import styles from './MessageList.module.scss';

export interface IMessageListProps {
  items: any[];
  chatId: string | undefined;
}

export const MessageList: FC<IMessageListProps> = (props) => {
  const { chatId } = { ...props };
  return chatId ? (
    <List>{Message}</List>
  ) : (
    <div className={styles.blank}>Выберите чат...</div>
  );
};
