import React, { FunctionComponent } from 'react';

// import styles from './List.module.scss';

export interface IListProps {}

const List: FunctionComponent<IListProps> = (props) => {
  return <div>{props.children}</div>;
};

export default List;
