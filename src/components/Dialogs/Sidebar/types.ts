import { IChat } from 'types';

// Component

// these are all the optional props
export interface IDefaultProps {}

// these are all the required props
export interface IProps {
  handleClickCreator: any;
  aChats: IChat[];
  activeChat: string | undefined;
}

export interface IState {
  // this might not be needed if the component doesn't have internal state
}

export interface IContext {
  // this might not be needed if the component doesn't consume the context
}

// Container

export type StateProps = Pick<IProps, 'aChats'>;

export type OwnProps = Pick<IProps, 'handleClickCreator' | 'activeChat'>;
