// Component

// these are all the optional props
export interface IDefaultProps {}

// these are all the required props
export interface IProps extends Partial<IDefaultProps> {
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  hasNextPage: boolean;

  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  isNextPageLoading: boolean;

  // Array of items loaded so far.
  items: any[];

  // Callback function responsible for loading the next page of items.
  loadNextPage: any;

  chatId: string | undefined;
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
  'hasNextPage' | 'isNextPageLoading' | 'items'
>;
export type OwnProps = Pick<IProps, 'chatId'>;
