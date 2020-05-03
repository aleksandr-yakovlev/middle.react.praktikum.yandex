import React from 'react';

import { MessageList } from 'components/Main/MessageList';
import { Sidebar } from 'components/Dialogs/Sidebar';

import styles from './Chat.module.scss';

export class Chat extends React.PureComponent {
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
