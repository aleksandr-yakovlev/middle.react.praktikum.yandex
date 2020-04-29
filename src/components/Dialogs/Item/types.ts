import { IChat } from 'types';
// Component

export enum ETypeItem {
  personal = 0,
  group,
  channel,
}

// these are all the optional props
export interface IDefaultProps {}

// these are all the required props
export interface IProps extends Partial<IDefaultProps>, IChat {
  type: ETypeItem;
  ava: string;
  label: string;
  username: string;
  shortmessage: string;
  timestamp: Date | undefined;
}

export interface IState {
  // this might not be needed if the component doesn't have internal state
}

export interface IContext {
  // this might not be needed if the component doesn't consume the context
}

// Container

export type StateProps = Pick<
  IProps,
  'type' | 'ava' | 'label' | 'username' | 'shortmessage' | 'timestamp'
>;
export type OwnProps = Pick<IProps, 'chatId' | 'isPinned'>;
