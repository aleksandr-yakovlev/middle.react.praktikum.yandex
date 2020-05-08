import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MessageList, IMessagesData } from 'components/MessageList';
import { Sidebar, chatsDataType } from 'components/Sidebar';

import { chatsData, getChatData } from './chats.testdata';

import styles from './Chat.module.scss';

function withRouter<T>(Component: React.ComponentType<T>) {
  return (props: T & RouteComponentProps<{ id: string }>) => {
    return (
      <Component
        currentChat={props.match.params.id}
        chatMessages={getChatData(props.match.params.id)}
        {...props}
      />
    );
  };
}

interface IChatState {
  currentChat: string | undefined;
  chatMessages: IMessagesData | undefined;
}

interface IChatProps {
  currentChat: string;
}

class Chat extends React.Component<IChatProps> {
  readonly state: IChatState = {
    currentChat: this.props.currentChat,
    chatMessages: this.props.currentChat
      ? getChatData(this.props.currentChat)
      : undefined,
  };

  handleClickCreator = (chatId: string) => {
    return () => {
      this.setState(() => ({
        currentChat: chatId,
        chatMessages: getChatData(chatId),
      }));
    };
  };

  chatsDataSort = (ChatsData: chatsDataType[]) => {
    return ChatsData.sort(
      (chat1: chatsDataType, chat2: chatsDataType): number =>
        chat2.timestamp.getTime() - chat1.timestamp.getTime(),
    );
  };

  render() {
    const { currentChat, chatMessages } = this.state;
    return (
      <div className={styles.chat}>
        <Sidebar
          activeChat={currentChat}
          chatsData={this.chatsDataSort(chatsData)}
          handleClickCreator={this.handleClickCreator}
        />
        <MessageList data={chatMessages} />
      </div>
    );
  }
}

const ChatWrapped = withRouter(Chat);

export { ChatWrapped as Chat };
