import React, { FunctionComponent } from 'react';

import List from '../../UI/List';
import { Item } from '../Item';

import { IProps } from './types';

import styles from './Sidebar.module.scss';

export const Sidebar: FunctionComponent<IProps> = (props) => {
  const { chatList, handleClickCreator, activeChat } = { ...props };
  let a: React.ReactElement<Item>[] = [];
  chatList.forEach((element, index) => {
    a.push(
      <Item
        className={activeChat === element.chatId ? styles.active : ''}
        key={index}
        onClick={handleClickCreator(element.chatId)}
        {...element}
      />,
    );
  });
  return (
    <div className={styles.sidebar}>
      <List>{a}</List>
    </div>
  );
};
