import React from 'react';

import styles from './Comment.module.scss';

export interface ICommentProps {
  avatar?: React.ReactNode;
  label?: React.ReactNode;
  content: React.ReactNode;
  timestamp?: React.ReactNode;
}

export const Comment: React.FC<ICommentProps> = ({
  avatar,
  label,
  content,
  timestamp,
}) => {
  const avatarDOM = (
    <div className={styles.left}>
      {typeof avatar === 'string' ? (
        <img className={styles.avatar} src={avatar} alt="" />
      ) : (
        avatar
      )}
    </div>
  );

  const contentDOM = (
    <div className={styles.right}>
      <p className={styles.top}>
        {label && <span className={styles.label}>{label}</span>}
        {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
      </p>
      {content}
    </div>
  );

  const commentDOM = (
    <div className={styles.comment}>
      {avatarDOM}
      {contentDOM}
    </div>
  );

  return commentDOM;
};
