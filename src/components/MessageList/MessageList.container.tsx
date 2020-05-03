import * as React from 'react';

import { OwnProps, StateProps } from './types';

import { MessageList } from './MessageList';
import getTestData from './MessageList.tesdata';

class MessageListContainer extends React.Component<OwnProps, StateProps> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      hasNextPage: true,
      isNextPageLoading: false,
      items: [],
    };
  }

  loadNextPage = () => {
    this.setState({ isNextPageLoading: true }, () => {
      setTimeout(() => {
        this.setState((state) => ({
          hasNextPage: state.items.length < 1000,
          isNextPageLoading: false,
          items: [...state.items].concat(
            new Array(50).fill(true).map(() => getTestData()),
          ),
        }));
      }, 250);
    });
  };

  componentWillReceiveProps(nextProps: OwnProps) {
    if (this.props.chatId !== nextProps.chatId) {
      this.setState({ items: [] });
    }
  }

  public render() {
    const { hasNextPage, isNextPageLoading, items } = this.state;
    const { chatId } = this.props;
    return (
      <MessageList
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        items={items}
        loadNextPage={this.loadNextPage}
        chatId={chatId}
      />
    );
  }
}

export { MessageListContainer as MessageList };
