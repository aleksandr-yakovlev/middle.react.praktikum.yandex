import React, { FC, MouseEvent } from 'react';

import { List as ChatList } from 'components/UI/List';
import { ChatItem, IChatItemProps } from '../ChatItem';
import { UserPanel } from 'components/UserPanel';

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

export const Sidebar: FC<ISidebarProps> = ({
  userId,
  chatsData,
  handleClickCreator,
  Logout,
  activeChat,
}) => {
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
      <UserPanel userId={userId} Logout={Logout} />
    </div>
  );
};
