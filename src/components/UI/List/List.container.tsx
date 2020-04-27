import * as React from 'react';
import List from './List';

export interface IListContainerProps {}

export interface IListState {}

export default class ListContainer extends React.Component<
  IListContainerProps,
  IListState
> {
  constructor(props: IListContainerProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <List {...this.props} />;
  }
}
