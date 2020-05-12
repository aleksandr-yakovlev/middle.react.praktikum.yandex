import React, { FC, MouseEvent } from 'react';

import { List as ChatList } from '../UI/List';
import { ChatItem, IChatItemProps } from '../ChatItem';

import styles from './Sidebar.module.scss';

export type chatsDataType = Pick<
  IChatItemProps,
  | 'chatId'
  | 'chatType'
  | 'ava'
  | 'label'
  | 'username'
  | 'shortmessage'
  | 'timestamp'
>;

export interface ISidebarProps {
  userId: string;
  handleClickCreator: (
    chatId: string,
  ) => (e: MouseEvent<HTMLDivElement>) => void;
  Logout: (e: MouseEvent<HTMLElement>) => void;
  chatsData: chatsDataType[];
  activeChat: string | undefined;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { userId, chatsData, handleClickCreator, Logout, activeChat } = props;
  return (
    <div className={styles.sidebar}>
      <ChatList>
        {chatsData.map(
          ({
            chatId,
            chatType,
            ava,
            label,
            username,
            shortmessage,
            timestamp,
          }) => {
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
          },
        )}
      </ChatList>
      <div className={styles.user}>
        <p>Пользователь: {userId}</p>
        <p onClick={Logout} className={styles.exit}>
          Выйти
        </p>
      </div>
    </div>
  );
};
