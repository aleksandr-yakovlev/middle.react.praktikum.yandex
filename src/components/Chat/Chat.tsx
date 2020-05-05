import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MessageList, chatMessagesType } from 'components/MessageList';
import { Sidebar, chatsDataType } from 'components/Sidebar';

import { chatsData, getMessages } from './chats.testdata';

import styles from './Chat.module.scss';

function withRouter<T>(Component: React.ComponentType<T>) {
  return (props: T & RouteComponentProps<{ id: string }>) => {
    return (
      <Component
        chatId={props.match.params.id}
        chatMessages={getMessages(50)}
        {...props}
      />
    );
  };
}

interface IChatState {
  chatId: string | undefined;
  chatMessages: chatMessagesType[];
}

interface IChatProps {
  chatId: string;
  chatMessages: chatMessagesType[];
}

class Chat extends React.Component<IChatProps> {
  readonly state: IChatState = {
    chatId: this.props.chatId,
    chatMessages: this.props.chatId ? getMessages(50) : [],
  };

  handleClickCreator = (chatId: string) => {
    return () => {
      this.setState({ chatId: chatId, chatMessages: getMessages(50) });
    };
  };

  render() {
    const { chatId, chatMessages } = this.state;
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
          chatMessages={chatMessages}
          isActive={chatId ? true : false}
        />
      </div>
    );
  }
}

const ChatWrapped = withRouter(Chat);

export { ChatWrapped as Chat };
