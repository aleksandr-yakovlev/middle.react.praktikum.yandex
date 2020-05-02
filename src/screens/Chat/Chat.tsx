import React from 'react';

import { ScreensChatMain } from './Main';
import { ScreensChatSidebar } from './Sidebar';

export class ScreensChat extends React.PureComponent {
  readonly state = {
    chatId: undefined,
  };
  handleClickCreator = (chatId: string) => {
    return () => {
      this.setState({ chatId: chatId });
    };
  };

  render() {
    return (
      <div className={'rootScreen'} style={{ height: '100%', display: 'flex' }}>
        <ScreensChatSidebar
          handleClickCreator={this.handleClickCreator}
          activeChat={this.state.chatId}
        />
        <ScreensChatMain chatId={this.state.chatId} />
      </div>
    );
  }
}
