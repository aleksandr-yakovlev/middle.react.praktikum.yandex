import * as React from 'react';

import { OwnProps, StateProps } from './types';

import { Message } from './Message';

class MessageContainer extends React.Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      ava: '',
      username: '',
      message: '',
      timestamp: undefined,
    };
  }

  componentDidMount() {
    // getTestData(this.props.chatId).then((response) =>
    //   this.setState({ ...response }),
    // );
  }

  public render() {
    const { chatId, isPinned } = { ...this.props };
    return <Message {...this.state} chatId={chatId} isPinned={isPinned} />;
  }
}

export { MessageContainer as Message };
