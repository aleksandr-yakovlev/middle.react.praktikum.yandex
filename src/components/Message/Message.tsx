import React, { FunctionComponent } from 'react';
import { Comment } from 'components/UI/Comment';

import { IProps } from './types';

import styles from './Message.module.scss';

export const Message: FunctionComponent<IProps> = (props) => {
  const { ava, username, message, timestamp } = props;
  const contentDOM = <p className={styles.content}>{message}</p>;
  const timestampFormated = timestamp
    ? timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;
  return (
    <Comment
      avatar={ava}
      label={username}
      timestamp={timestampFormated}
      content={contentDOM}
    />
  );
};
