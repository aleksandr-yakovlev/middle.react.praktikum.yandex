import React, { FC, MouseEvent } from 'react';

import { List as ChatList } from '../UI/List';
import { ChatItem, IChatItemProps } from '../ChatItem';

import styles from './Sidebar.module.scss';

export type chatsDataType = IChatItemProps;

export interface ISidebarProps {
  handleClickCreator: (
    chatId: string,
  ) => (e: MouseEvent<HTMLDivElement>) => void;
  chatsData: chatsDataType[];
  activeChat: string | undefined;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { chatsData, handleClickCreator, activeChat } = props;
  return (
    <div className={styles.sidebar}>
      <ChatList>
        {chatsData.map((chatProps) => {
          const {
            chatId,
            chatType,
            ava,
            label,
            username,
            shortmessage,
            timestamp,
          } = chatProps;
          return (
            <ChatItem
              key={chatId}
              className={activeChat === chatId ? styles.active : ''}
              onClick={handleClickCreator(chatId)}
              chatId={chatId}
              chatType={chatType}
              ava={ava}
              label={label}
              username={username}
              shortmessage={shortmessage}
              timestamp={timestamp}
            />
          );
        })}
      </ChatList>
    </div>
  );
};
