import * as React from 'react';

import { OwnProps, StateProps } from './types';

import { Item } from './Item';
import getTestData from './Item.tesdata';

class ItemContainer extends React.Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      type: 0,
      ava: '',
      label: '',
      username: '',
      shortmessage: '',
      timestamp: undefined,
    };
  }

  componentDidMount() {
    getTestData(this.props.chatId).then((response) =>
      this.setState({ ...response }),
    );
  }

  public render() {
    const { chatId, isPinned } = { ...this.props };
    return <Item {...this.state} chatId={chatId} isPinned={isPinned} />;
  }
}

export { ItemContainer as Item };
