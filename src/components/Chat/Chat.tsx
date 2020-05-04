import React from 'react';
import faker from 'faker/locale/ru';

import { MessageList, chatMessagesType } from 'components/MessageList';
import { Sidebar, chatsDataType } from 'components/Sidebar';

import { chatsData } from './chats.testdata';

import styles from './Chat.module.scss';

interface IChatState {
  chatId: string | undefined;
  chatMessages: chatMessagesType[];
}

export class Chat extends React.Component {
  readonly state: IChatState = {
    chatId: undefined,
    chatMessages: [],
  };
  handleClickCreator = (chatId: string) => {
    return () => {
      const newChatMessages = [
        ...this.state.chatMessages,
        {
          ava: `https://picsum.photos/id/${faker.random.number(1000)}/48`,
          username: faker.name.firstName(),
          message: faker.hacker.phrase(),
          timestamp: faker.date.past(),
        },
      ];
      this.setState({ chatId: chatId, chatMessages: newChatMessages });
    };
  };

  render() {
    const { chatId } = this.state;
    return (
      <div className={styles.chat}>
        <Sidebar
          activeChat={chatId}
          chatsData={chatsData.sort(
            (chat1: chatsDataType, chat2: chatsDataType): number =>
              chat2.timestamp.getTime() - chat1.timestamp.getTime(),
          )}
          handleClickCreator={this.handleClickCreator}
        />
        <MessageList
          chatMessages={this.state.chatMessages}
          isActive={chatId ? true : false}
        />
      </div>
    );
  }
}
