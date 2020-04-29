import React, { FunctionComponent } from 'react';

import { IChat } from 'types';

import List from '../../UI/List';
import { Item } from '../Item';

import styles from './Sidebar.module.scss';

export interface ISidebarProps {
  chatList: IChat[];
}

export const Sidebar: FunctionComponent<ISidebarProps> = (props) => {
  const { chatList } = { ...props };
  let a: React.ReactElement<Item>[] = [];
  chatList.forEach((element) => {
    a.push(<Item key={element.chatId} {...element} />);
  });
  return (
    <div className={styles.sidebar}>
      <div className={styles.chats}>
        <List>{a}</List>
      </div>
    </div>
  );
};
