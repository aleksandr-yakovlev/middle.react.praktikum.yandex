import * as React from 'react';

import { Item } from './Item';
import getTestData from './Item.tesdata';

import { OwnProps, StateProps } from './types';

class ItemContainer extends React.Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      chatType: 0,
      ava: '',
      label: '',
      username: '',
      shortmessage: '',
      // timestamp: undefined,
    };
  }

  componentDidMount() {
    getTestData(this.props.chatId).then((response) =>
      this.setState({ ...response }),
    );
  }

  public render() {
    const { chatId, isPinned, ...restProps } = { ...this.props };
    return (
      <Item
        {...this.state}
        chatId={chatId}
        isPinned={isPinned}
        {...restProps}
      />
    );
  }
}

export { ItemContainer as Item };
