import React, { KeyboardEvent, ChangeEvent, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MessageList, IMessagesData } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';
import { Sidebar, chatsDataType } from 'components/Sidebar';

import { chatsData, getChatData } from './chats.testdata';

import styles from './Chat.module.scss';

interface IChatState {
  currentChat?: string;
  chatMessages: IMessagesData;
  message: string;
}

interface IChatProps {
  userId: string;
  currentChat?: string;
  Logout: (e: MouseEvent<HTMLElement>) => void;
}

class Chat extends React.Component<IChatProps> {
  readonly state: IChatState = {
    currentChat: this.props.currentChat,
    chatMessages: { users: {}, messages: [] },
    message: '',
  };

  componentDidMount() {
    if (this.props.currentChat) {
      let currentChat = this.props.currentChat;
      this.setState(() => ({
        chatMessages: getChatData(currentChat),
      }));
    }
  }

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
      e.preventDefault();
      const message: string = e.currentTarget.value;
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
    const { userId, Logout } = this.props;
    return (
      <div className={styles.chat}>
        <Sidebar
          userId={userId}
          activeChat={currentChat}
          chatsData={this.chatsDataSort(chatsData)}
          handleClickCreator={this.handleClickCreator}
          Logout={Logout}
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

export { Chat };
