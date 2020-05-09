import React, { KeyboardEvent, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { MessageList, IMessagesData } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';
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
  chatMessages: IMessagesData;
  message: string;
}

interface IChatProps {
  currentChat: string;
}

class Chat extends React.Component<IChatProps> {
  readonly state: IChatState = {
    currentChat: this.props.currentChat,
    chatMessages: this.props.currentChat
      ? getChatData(this.props.currentChat)
      : { users: {}, messages: [] },
    message: '',
  };

  handleClickCreator = (chatId: string) => {
    return () => {
      this.setState(() => ({
        currentChat: chatId,
        chatMessages: getChatData(chatId),
      }));
    };
  };

  autosizer = (ref: React.RefObject<HTMLTextAreaElement>) => {
    const curRef = ref.current;
    if (curRef?.style.height !== curRef?.scrollHeight) {
      curRef?.style.setProperty('height', 'auto');
      curRef?.style.setProperty('height', `${curRef?.scrollHeight}px`);
    }
  };

  handleMessageKeyPress = (ref: React.RefObject<HTMLTextAreaElement>) => (
    e: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      const message: string = e.currentTarget.value;
      e.preventDefault();
      this.setState(
        (prevState: IChatState) => ({
          message: '',
          chatMessages: {
            ...prevState.chatMessages,
            messages: [
              ...prevState.chatMessages.messages,
              {
                messageId: uuidv4(),
                authorId: Object.keys(prevState.chatMessages.users)[0],
                text: message,
                timestamp: new Date(),
              },
            ],
          },
        }),
        () => this.autosizer(ref),
      );
    }
  };

  onMessageChange = (ref: React.RefObject<HTMLTextAreaElement>) => (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    let message: string = e.currentTarget.value;
    this.setState(() => ({
      message: message,
    }));
    this.autosizer(ref);
  };

  chatsDataSort = (ChatsData: chatsDataType[]) => {
    return ChatsData.sort(
      (chat1: chatsDataType, chat2: chatsDataType): number =>
        chat2.timestamp.getTime() - chat1.timestamp.getTime(),
    );
  };

  render() {
    const { currentChat, chatMessages, message } = this.state;
    return (
      <div className={styles.chat}>
        <Sidebar
          activeChat={currentChat}
          chatsData={this.chatsDataSort(chatsData)}
          handleClickCreator={this.handleClickCreator}
        />
        <div className={styles.main}>
          {chatMessages ? (
            <div className={styles.messages}>
              <MessageList data={chatMessages} />
              <MessageForm
                handleKeyPress={this.handleMessageKeyPress}
                onChange={this.onMessageChange}
                value={message}
              />
            </div>
          ) : (
            <div className={styles.blank}>
              <p className={styles.select}>Выберите чат...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const ChatWrapped = withRouter(Chat);

export { ChatWrapped as Chat };
