import * as React from 'react';
import Sidebar from './Sidebar';

export interface ISidebarContainerProps {}

export interface ISidebarState {}

export default class SidebarContainer extends React.Component<
  ISidebarContainerProps,
  ISidebarState
> {
  constructor(props: ISidebarContainerProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <Sidebar {...this.props} />;
  }
}
