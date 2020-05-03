import * as React from 'react';

import { ChatItem } from './ChatItem';
import { getTestData } from './ChatItem.tesdata';

import { OwnProps, StateProps } from './types';

class ChatItemContainer extends React.Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      chatType: 0,
      ava: '',
      label: '',
      username: '',
      shortmessage: '',
    };
  }

  componentDidMount() {
    getTestData(this.props.chatId).then((response) =>
      this.setState({ ...response }),
    );
  }

  public render() {
    const { chatId, isPinned, ...divProps } = { ...this.props };
    const { chatType, ava, label, username, shortmessage } = { ...this.state };
    return (
      <ChatItem
        chatType={chatType}
        ava={ava}
        label={label}
        username={username}
        shortmessage={shortmessage}
        chatId={chatId}
        isPinned={isPinned}
        {...divProps}
      />
    );
  }
}

export { ChatItemContainer as ChatItem };
