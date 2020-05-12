import React, { FC } from 'react';

import styles from './Comment.module.scss';

export interface ICommentProps {
  avatar?: React.ReactNode;
  label?: React.ReactNode;
  content: React.ReactNode;
  timestamp?: React.ReactNode;
  isCenterTimestamp?: boolean;
}

export const Comment: FC<ICommentProps> = ({
  avatar,
  label,
  content,
  timestamp,
  isCenterTimestamp,
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
        {timestamp && !isCenterTimestamp && (
          <span className={styles.timestamp}>{timestamp}</span>
        )}
      </p>
      {isCenterTimestamp && timestamp ? (
        <div className={styles.bottom}>
          {content}
          <span className={styles.timestamp}>{timestamp}</span>
        </div>
      ) : (
        content
      )}
    </div>
  );

  return (
    <div className={styles.comment}>
      {avatarDOM}
      {contentDOM}
    </div>
  );
};
