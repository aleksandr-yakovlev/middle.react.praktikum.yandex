import React from 'react';

import { MessageList } from 'components/MessageList';
import { Sidebar } from 'components/Sidebar';

import styles from './Chat.module.scss';

export class Chat extends React.Component {
  readonly state = {
    chatId: undefined,
  };
  handleClickCreator = (chatId: string) => {
    return () => {
      this.setState({ chatId: chatId });
    };
  };

  render() {
    const { chatId } = { ...this.state };

    return (
      <div className={styles.chat}>
        <Sidebar
          activeChat={chatId}
          handleClickCreator={this.handleClickCreator}
        />
        <MessageList chatId={chatId} />
      </div>
    );
  }
}
