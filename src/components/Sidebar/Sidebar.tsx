import React, { FunctionComponent } from 'react';

import { List as ChatList } from '../UI/List';
import { ChatItem } from '../ChatItem';

import { IProps } from './types';

import styles from './Sidebar.module.scss';

export const Sidebar: FunctionComponent<IProps> = (props) => {
  const { aChats, handleClickCreator, activeChat } = { ...props };
  return (
    <div className={styles.sidebar}>
      <ChatList>
        {aChats.map((chatProps) => {
          const { chatId } = { ...chatProps };
          return (
            <ChatItem
              key={chatId}
              className={activeChat === chatId ? styles.active : ''}
              onClick={handleClickCreator(chatId)}
              chatId={chatId}
            />
          );
        })}
      </ChatList>
    </div>
  );
};
