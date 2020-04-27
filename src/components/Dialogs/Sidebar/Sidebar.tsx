import React, { FunctionComponent } from 'react';
import List from '../../UI/List';
import Item from '../Item';

import styles from './Sidebar.module.scss';

export interface ISidebarProps {}

const Sidebar: FunctionComponent<ISidebarProps> = (props) => {
  let a = [];
  for (let index = 0; index < 50; index++) {
    a.push(<Item key={index} />);
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.chats}>
        <List>{a}</List>
      </div>
    </div>
  );
};

export default Sidebar;
